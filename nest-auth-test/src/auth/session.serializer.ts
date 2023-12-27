import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
  }

  // 세션에 정보를 저장
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    console.log('SessionSerializer:serializeUser() user: ', user);
    done(null, user.email);
  }

  // 세션에서 가져온 정보로 사용자 정보를 반환
  async deserializeUser(
    payload: any,
    done: (err: Error, payload: any) => void,
  ): Promise<any> {
    console.log('SessionSerializer:deserializeUser() payload: ', payload);
    const user = await this.userService.getUser(payload);
    if (!user) {
      done(new Error('No User'), null);
      return;
    }
    const { password, ...userInfo } = user;
    done(null, userInfo);
  }
}
