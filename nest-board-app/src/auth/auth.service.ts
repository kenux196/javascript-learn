import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = new User();
    user.username = username;
    user.password = password;
    await this.usersRepository.save(user);
  }
}
