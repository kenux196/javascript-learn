import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(userDto: CreateUserDto) {
    console.log('AuthService:register()');
    const user = await this.userService.getUser(userDto.email);
    if (user) {
      // 이미 가입된 사용자 있음.
      throw new HttpException(
        '이미 가입된 사용자입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const encryptedPassword = bcrypt.hashSync(userDto.password, 10);
    try {
      const user = await this.userService.createUser({
        ...userDto,
        password: encryptedPassword,
      });
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('서버 에러', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async validateUser(email: string, password: string) {
    console.log('AuthService:validateUser()');
    const user = await this.userService.getUser(email);

    if (!user) {
      return null;
    }

    const { password: hashedPassword, ...userInfo } = user;
    if (bcrypt.compareSync(password, hashedPassword)) {
      return userInfo;
    }
    return null;
  }
}
