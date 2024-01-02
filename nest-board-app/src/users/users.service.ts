import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getUserByUsername(username: string): Promise<User> {
    // const user = await this.usersRepository.findByUsername(username); // Data Mapper 방식
    const user = await User.findByUsername(username); // Active Record 방식
    if (!user) {
      throw new NotFoundException(`Not found username: ${username}`);
    }
    return user;
  }
}
