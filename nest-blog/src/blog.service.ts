import { MemoryRepository } from './blog.memory-repository';
import { PostDto } from './blog.model';

export class BlogService {
  memoryRepository: MemoryRepository;

  constructor() {
    this.memoryRepository = new MemoryRepository();
  }

  getAllPosts() {
    return this.memoryRepository.findAll();
  }

  getPost(id) {
    return this.memoryRepository.findById(id);
  }

  createPost(postDto: PostDto) {
    const id = this.memoryRepository.save(postDto);
    return `Created Post: ${id}`;
  }

  deletePost(id) {
    if (this.existPost(id) === false) {
      return `Delete Failed: post(${id}) is not existed.`;
    }
    this.memoryRepository.deleteById(id);
    return `Deleted post: ${id}`;
  }

  updatePost(id, postDto: PostDto) {
    if (this.existPost(id) === false) {
      return `Update Failed: post(${id}) is not existed.`;
    }
    this.memoryRepository.update(id, postDto);
    return `Updated post: ${id}`;
  }

  existPost(id) {
    const post = this.getPost(id);
    if (post === undefined) {
      return false;
    }
    return true;
  }
}
