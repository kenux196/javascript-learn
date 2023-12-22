import {
  Controller,
  Param,
  Body,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('/blog')
export class BlogController {
  private blogService: BlogService;

  constructor(blogService: BlogService) {
    //  this.blogService = new BlogService();
    this.blogService = blogService;
  }

  @Get()
  async getAllPosts() {
    console.log(`모든 게시글 가져오기`);
    return await this.blogService.getAllPosts();
  }

  @Post()
  async createPost(@Body() postDto) {
    console.log('게시글 작성');
    return await this.blogService.createPost(postDto);
  }

  @Get('/:id')
  async getPost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 하나 가져오기`);
    return await this.blogService.getPost(id);
  }

  @Delete('/:id')
  async deletePost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 삭제`);
    return await this.blogService.deletePost(id);
  }

  @Put('/:id')
  async updatePost(@Param('id') id: string, @Body() postDto) {
    console.log(`[id: ${id}] 게시글 업데이트`);
    return await this.blogService.updatePost(id, postDto);
  }
}
