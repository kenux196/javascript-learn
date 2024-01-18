import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

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
}
