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
  blogService: BlogService;

  constructor() {
    this.blogService = new BlogService();
  }

  @Get()
  getAllPosts() {
    console.log(`모든 게시글 가져오기`);
    return this.blogService.getAllPosts();
  }

  @Post()
  createPost(@Body() postDto) {
    console.log('게시글 작성');
    return this.blogService.createPost(postDto);
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 하나 가져오기`);
    return this.blogService.getPost(id);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    console.log(`[id: ${id}] 게시글 삭제`);
    return this.blogService.deletePost(id);
  }

  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() postDto) {
    console.log(`[id: ${id}] 게시글 업데이트`);
    return this.blogService.updatePost(id, postDto);
  }
}
