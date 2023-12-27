import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: any): Promise<boolean> {
    // context에서 rquest 정보를 가져옴
    const request = context.switchToHttp().getRequest();

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

/**
 * LocalAuthGuard
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: any): Promise<boolean> {
    console.log('LocalAuthGuard: canActivate');
    const result = (await super.canActivate(context)) as boolean;
    // local strategy 실행
    const request = context.switchToHttp().getRequest();
    console.log('before login session: ', request.session);
    await super.logIn(request); // 세션 저장
    console.log('after login session: ', request.session);
    return result;
  }
}

/**
 * AuthenticatedGuard
 */
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('AuthenticatedGuard: canActivate');
    const request = context.switchToHttp().getRequest();
    console.log('session: ', request.session);
    return request.isAuthenticated();
  }
}
