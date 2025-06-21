import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hash } from 'argon2';
import * as crypto from 'crypto';
import { DbService } from 'src/db/db.service';

import { CreateUserDTO } from './dto';

@Injectable()
export class UserService {
  public constructor(
    private readonly dbService: DbService,
    private readonly configService: ConfigService,
  ) {
    this.secretSalt =
      configService.getOrThrow<string>('SECRET_SALT') || 'default-secret-salt';
  }

  private secretSalt;

  public async create(user: CreateUserDTO): Promise<string> {
    const isExists = this.dbService.getUserByLogin(user.login);
    if (isExists) {
      throw new ConflictException('Такой пользователь уже существует');
    }

    const newPass = await hash(user.password);
    user.password = newPass;
    const newUser = await this.dbService.createUser(user);

    const token = this.createToken(newUser.id);
    return token;
  }

  private createToken(userId: number): string {
    return crypto
      .createHash('sha256')
      .update(userId.toString() + this.secretSalt)
      .digest('hex');
  }
}
