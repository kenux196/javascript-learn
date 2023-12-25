import { CanActivate, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: any): Promise<boolean> {
    // context에서 rquest 정보를 가져옴
    const request = context.switchToHttp().getRequest();
    console.log('canActivate: ' + request.body.email);

    // login 쿠키가 존재하면 인증된 것
    if (request.cookies['login']) {
      return true;
    }

    // 쿠키가 없으면 request body 정보 확인
    if (!request.body.email || !request.body.password) {
      return false;
    }

    const user = await this.authService.validateUser(
      request.body.email,
      request.body.password,
    );

    if (!user) {
      return false;
    }

    request.user = user;
    return true;

    // 가드 내에서 응답에 쿠키를 설정할 수 없다.
    // 가드는 모든 미들웨어의 실행이 끝난 다음 실행되며 filter나 pipe 보다는 먼저 실행된다.
  }
}
