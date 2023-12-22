import { readFile, writeFile } from 'fs/promises';
import { PostDto } from './blog.model';
import { Injectable } from '@nestjs/common';

export interface BlogRepository {
  findAll(): Promise<PostDto[]>;
  findById(id: string): Promise<PostDto>;
  save(postDto: PostDto): Promise<string>;
  deleteById(id: string);
  deleteAll();
  update(id: string, postDto: PostDto);
}

@Injectable()
export class BlogMemoryRepository implements BlogRepository {
  posts = [];
  id = 0;

  async findAll(): Promise<PostDto[]> {
    return this.posts;
  }

  async findById(id): Promise<PostDto> {
    return this.posts.find((post) => post.id === id);
  }

  async save(postDto: PostDto): Promise<string> {
    const id = ++this.id;
    const newPost = {
      id: id.toString(),
      ...postDto,
      createdDt: new Date(),
      updatedDt: new Date(),
    };
    this.posts.push(newPost);
    return newPost.id;
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

@Injectable()
export class BlogFileRepository implements BlogRepository {
  FILE_NAME = './src/blog.data.json';
  id = 0;

  getId() {
    return ++this.id;
  }

  async findAll(): Promise<PostDto[]> {
    const datas = await readFile(this.FILE_NAME, 'utf8');
    const posts = JSON.parse(datas);
    return posts;
  }

  async findById(id: string): Promise<PostDto> {
    const posts = await this.findAll();
    const result = posts.find((post) => post.id === id);
    return result;
  }

  async save(postDto: PostDto): Promise<string> {
    const posts = await this.findAll();
    const id = posts.length + 1;
    const newPost = {
      id: id.toString(),
      ...postDto,
      createdDt: new Date(),
    };
    posts.push(newPost);
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
    return newPost.id;
  }

  async deleteById(id: string) {
    const posts = await this.findAll();
    const filteredPosts = posts.filter((post) => post.id !== id);
    await writeFile(this.FILE_NAME, JSON.stringify(filteredPosts));
  }

  async deleteAll() {
    const posts = [];
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }

  async update(id: string, postDto: PostDto) {
    const posts = await this.findAll();
    const index = posts.findIndex((post) => post.id === id);
    const updatePost = {
      id,
      ...postDto,
      updateDt: new Date(),
    };
    posts[index] = updatePost;
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }
}
