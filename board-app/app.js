const express = require('express');
const handlebars = require('express-handlebars');
const mongodbConnection = require('./config/mongodb-connection');
const log = require('./config/console-log');
const postService = require('./services/post-service');
const { ObjectId } = require('mongodb');
const app = express();

const titleOfBoard = '테스트 게시판';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  'handlebars',
  handlebars.create({
    helpers: require('./config/handlebars-helpers'),
  }).engine
);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', async (req, res) => {
  log('request [GET] /');
  const page = parseInt(req.query.page) || 1;
  const search = req.query.search || '';
  try {
    const [posts, paginator] = await postService.list(collection, page, search);
    res.render('home', { title: titleOfBoard, search, paginator, posts });
  } catch (error) {
    log(error);
    res.render('home', { title: titleOfBoard });
  }
});

app.get('/write', (req, res) => {
  log('request [GET] /write');
  res.render('write', { title: titleOfBoard, mode: 'create' });
});

app.post('/write', async (req, res) => {
  log(`request [POST] /write`);
  const post = req.body;
  const result = await postService.writePost(collection, post);
  res.redirect(`/detail/${result.insertedId}`);
});

app.get('/detail/:id', async (req, res) => {
  log('request [GET] /detail/' + req.params.id);
  const result = await postService.getDetailPost(collection, req.params.id);
  log(result);
  res.render('detail', { title: titleOfBoard, post: result });
});

app.post('/check-password', async (req, res) => {
  const { id, password } = req.body;
  const post = await postService.getPostByIdAndPassword(collection, {
    id,
    password,
  });

  if (!post) {
    return res.status(404).json({ isExist: false });
  }
  return res.json({ isExist: true });
});

app.get('/modify/:id', async (req, res) => {
  const post = await postService.getPostById(collection, req.params.id);
  log(post);
  res.render('write', { title: titleOfBoard, mode: 'modify', post });
});

app.post('/modify/', async (req, res) => {
  const { id, title, writer, password, content } = req.body;

  const post = {
    title,
    writer,
    password,
    content,
    createdDate: new Date().toISOString(),
  };

  const result = postService.updatePost(collection, id, post);
  res.redirect(`/detail/${id}`);
});

app.delete('/delete', async (req, res) => {
  const { id, password } = req.body;
  try {
    const result = await collection.deleteOne({
      _id: new ObjectId(id),
      password: password,
    });
    if (result.deletedCount !== 1) {
      log('삭제 실패');
      return res.json({ isSuccess: false });
    }
    return res.json({ isSuccess: true });
  } catch (error) {
    log(error);
    return res.json({ isSuccess: false });
  }
});

app.post('/write-comment', async (req, res) => {
  const { id, name, password, comment } = req.body;
  const post = await postService.getPostById(collection, id);

  if (post.comments) {
    post.comments.push({
      idx: post.comments.length + 1,
      name,
      password,
      comment,
      createdDate: new Date().toISOString(),
    });
  } else {
    post.comments = [
      {
        idx: 1,
        name,
        password,
        comment,
        createdDate: new Date().toISOString(),
      },
    ];
  }
  postService.updatePost(collection, id, post);
  return res.redirect(`/detail/${id}`);
});

app.delete('/delete-comment', async (req, res) => {
  const { id, idx, password } = req.body;

  const post = await collection.findOne(
    {
      _id: new ObjectId(id),
      comments: {
        $elemMatch: { idx: parseInt(idx), password },
      },
    },
    postService.projectionOption
  );

  if (!post) return res.json({ isSuccess: false });

  post.comments = post.comments.filter((comment) => comment.idx != idx);
  postService.updatePost(collection, id, post);
  return res.json({ isSuccess: true });
});

let collection;
app.listen(3000, async () => {
  log('Start Boarder app!!');
  const mongoClient = await mongodbConnection();
  collection = mongoClient.db().collection('post');
  log('MongoDB connected');
});
