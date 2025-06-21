import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/users/dto';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbService {
  public constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public createUser(user: CreateUserDTO): Promise<User> {
    try {
      const newUser = this.userRepository.create(user);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  public async getUserByLogin(login: string): Promise<User> | undefined {
    const user = await this.userRepository.findOneBy({ login });
    if (!user) return undefined;
    return user;
  }
}
