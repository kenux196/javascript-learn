import { MemoryRepository } from './blog.repository';
import { PostDto } from './blog.model';

export class BlogService {
  memoryRepository: MemoryRepository;

  constructor() {
    this.memoryRepository = new MemoryRepository();
  }

  getAllPosts() {
    return this.memoryRepository.findAll();
  }

  async getPost(id) {
    return this.memoryRepository.findById(id);
  }

  createPost(postDto: PostDto) {
    const id = this.memoryRepository.save(postDto);
    return `Created Post: ${id}`;
  }

  async deletePost(id) {
    const exist = await this.existPost(id);
    if (exist === false) {
      return `Delete Failed: post(${id}) is not existed.`;
    }
    this.memoryRepository.deleteById(id);
    return `Deleted post: ${id}`;
  }

  async updatePost(id, postDto: PostDto) {
    const exist = await this.existPost(id);
    if (exist === false) {
      return `Update Failed: post(${id}) is not existed.`;
    }
    this.memoryRepository.update(id, postDto);
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
