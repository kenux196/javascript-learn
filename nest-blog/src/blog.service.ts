import {
  BlogMemoryRepository,
  BlogFileRepository,
  BlogRepository,
} from './blog.repository';
import { PostDto } from './blog.model';

export class BlogService {
  // blogRepository: BlogMemoryRepository;
  blogRepository: BlogRepository;

  constructor() {
    // this.blogRepository = new BlogMemoryRepository();
    this.blogRepository = new BlogFileRepository();
  }

  async getAllPosts() {
    return await this.blogRepository.findAll();
  }

  async getPost(id) {
    return await this.blogRepository.findById(id);
  }

  async createPost(postDto: PostDto) {
    const id = await this.blogRepository.save(postDto);
    return `Created Post: ${id}`;
  }

  async deletePost(id) {
    const exist = await this.existPost(id);
    if (exist === false) {
      return `Delete Failed: post(${id}) is not existed.`;
    }
    this.blogRepository.deleteById(id);
    return `Deleted post: ${id}`;
  }

  async updatePost(id, postDto: PostDto) {
    const exist = await this.existPost(id);
    if (exist === false) {
      return `Update Failed: post(${id}) is not existed.`;
    }
    this.blogRepository.update(id, postDto);
    return `Updated post: ${id}`;
  }

  async existPost(id) {
    const post = await this.getPost(id);
    if (post === undefined) {
      return false;
    }
    return true;
  }
}
