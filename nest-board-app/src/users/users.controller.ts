import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    console.log('heeeeeeeee');
    return this.usersService.getUserByUsername(username);
  }
}
