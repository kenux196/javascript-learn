import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class HelloController {
  @Get()
  hello() {
    console.log('Request GET /');
    return '안녕하세요! NestJS로 만든 첫 애플리케이션입니다.';
  }

  @Get('/me')
  getName(@Query('name') name: String) {
    console.log(`Request GET /me params: ${name}`);
    return `당신은 ${name} 입니다.`;
  }
}
