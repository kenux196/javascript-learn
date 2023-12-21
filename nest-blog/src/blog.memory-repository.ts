import { PostDto } from './blog.model';

export class MemoryRepository {
  posts = [];
  id = 0;

  findAll() {
    return this.posts;
  }

  findById(id) {
    return this.posts.find((post) => post.id === id);
  }

  save(postDto: PostDto) {
    const id = ++this.id;
    this.posts.push({
      id: id.toString(),
      ...postDto,
      createdDt: new Date(),
      updatedDt: new Date(),
    });
    return id;
  }

  deleteById(id) {
    this.posts.forEach((post, index) => {
      if (post.id === id) {
        this.posts.splice(index, 1);
      }
    });
    // const filteredPosts = this.posts.filter((post) => post.id !== id);
    // this.posts = [...filteredPosts];
  }

  deleteAll() {
    this.posts = [];
  }

  update(id, postDto: PostDto) {
    const updateIndex = this.getPostIndex(id);
    const updatePost = {
      id,
      ...postDto,
      updatedDt: new Date(),
    };
    this.posts[updateIndex] = updatePost;
  }

  getPostIndex(id) {
    return this.posts.findIndex((post) => post.id === id);
  }
}
