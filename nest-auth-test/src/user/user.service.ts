import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(user): Promise<User> {
    return this.userRepository.save(user);
  }

  async getAllUser() {
    const result = await this.userRepository.find();
    return result;
  }

  async getUser(email: string) {
    console.log(`getUser(${email})`);
    const result = await this.userRepository.findOne({
      where: { email: email },
    });
    console.log(`result: ${result}`);
    return result;
  }

  async updateUser(email, _user) {
    // const user: User = await this.getUser(email);
    const user: User = await this.getUser(email);
    console.log(_user);
    user.username = _user.username;
    user.password = _user.password;
    console.log(user);
    this.userRepository.save(user);
  }

  deleteUser(email) {
    return this.userRepository.delete({ email: email });
  }
}
