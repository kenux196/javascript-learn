import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const salt = await bcrypt.genSalt();
    console.log('salt = ', salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('hashedPassword = ', hashedPassword);

    const user = new User();
    user.username = username;
    user.password = hashedPassword;

    try {
      await this.usersRepository.save(user);
    } catch (error) {
      if ((error.code = '23505')) {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async singIn(authCredentialDto: AuthCredentialDto) {
    const { username, password } = authCredentialDto;
    const user = await this.usersRepository.findOneBy({ username: username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return this.getAccessToken(user);
    } else {
      throw new UnauthorizedException('login failed');
    }
  }

  private async getAccessToken(user: User) {
    const { username } = user;
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }
}
