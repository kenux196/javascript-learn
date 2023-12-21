import { PostDto } from './blog.model';

export class BlogService {
  posts = [];
  id = 0;

  getAllPosts() {
    return this.posts;
  }

  createPost(postDto: PostDto) {
    const id = ++this.id;
    this.posts.push({
      id: id.toString(),
      ...postDto,
      createdDt: new Date(),
      updatedDt: new Date(),
    });
  }

  getPost(id) {
    const post = this.posts.find((post) => {
      return post.id === id;
    });
    console.log(post);
    return post;
  }

  deletePost(id) {
    console.log(this.existPost(id));
    if (this.existPost(id) === false) {
      console.log('222222222222');
      return `Failed: post(${id}) is not existed.`;
    }
    console.log('33333333333');
    const filteredPosts = this.posts.filter((post) => post.id !== id);
    this.posts = [...filteredPosts];
    return 'success';
  }

  updatePost(id, postDto: PostDto) {
    const updateIndex = this.getPostIndex(id);
    if (updateIndex < 0) {
      return `Failed: post(${id}) is not existed.`;
    }

    const updatePost = {
      id,
      ...postDto,
      updatedDt: new Date(),
    };
    this.posts[updateIndex] = updatePost;
    return updatePost;
  }

  existPost(id) {
    console.log(this.getPostIndex(id));
    return this.getPostIndex(id) < 0 ? false : true;
  }

  getPostIndex(id) {
    return this.posts.findIndex((post) => post.id === id);
  }
}
