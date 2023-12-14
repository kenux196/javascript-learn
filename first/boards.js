const express = require('express');

const app = express();
const port = 3000;
let idCount = 1;

let posts = [
  {
    id: 1,
    title: '샘플',
    name: '작성자',
    text: '내용',
    createdDateTime: Date(),
  },
];

function increaseId() {
  idCount += 1;
}

// req.body를 사용하려면 json middleware 사용해야 함.
// 미사용 시 undefined로 반환
app.use(express.json()); // active json middleware

// post 요청 시 컨텐트 타입이 application/x-www-form-urlencoded인 경우 파싱. json 미들웨어와 함께 사용.
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`START BOARD SERVER : use ${port}`));

app.get('/posts', (req, res) => {
  console.log('get board list');
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title, name, text } = req.body;
  increaseId();
  posts.push({
    id: idCount,
    title,
    name,
    text,
    createdDateTime: Date(),
  });
  res.json('OK');
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const filteredPosts = posts.filter((post) => post.id !== +id);
  const isLengthChanged = posts.length !== filteredPosts.length;
  posts = filteredPosts;
  if (isLengthChanged) {
    res.json('OK');
    return;
  }
  res.json('NOT CHANGED');
});
