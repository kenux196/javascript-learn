import { PostDto } from './blog.model';

export interface BlogRepository {
  findAll(): Promise<PostDto[]>;
  findById(id: string): Promise<PostDto>;
  save(postDto: PostDto): number;
  deleteById(id: string);
  deleteAll();
  update(id: string, postDto: PostDto);
}

export class MemoryRepository implements BlogRepository {
  posts = [];
  id = 0;

  async findAll(): Promise<PostDto[]> {
    return this.posts;
  }

  async findById(id): Promise<PostDto> {
    return this.posts.find((post) => post.id === id);
  }

  save(postDto: PostDto): number {
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
