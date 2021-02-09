import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserDto } from './dto.user/user.dto';
import { User } from './user.entity';
import { UserRole } from './user-roles.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createAdminUser(UserDto: UserDto): Promise<User> {
    if (UserDto.password != UserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return this.userRepository.createUser(UserDto, UserRole.ADMIN);
    }
  }
}