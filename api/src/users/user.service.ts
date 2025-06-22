import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { hash, verify } from 'argon2';

import { DbService } from '../db/db.service';
import { LoginUserDto, RegisterUserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly dbService: DbService) {}

  private sessions = new Map<string, number>();

  async register(dto: RegisterUserDTO): Promise<string> {
    const existingUser = await this.dbService.getUserByLogin(dto.login);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await hash(dto.password);
    const user = await this.dbService.createUser({
      login: dto.login,
      password: hashedPassword,
    });

    const token = this.generateToken(user.id);
    this.sessions.set(token, user.id);
    return token;
  }

  async login(dto: LoginUserDto): Promise<string> {
    const user = await this.dbService.getUserByLogin(dto.login);
    if (!user || !(await verify(user.password, dto.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.generateToken(user.id);
    this.sessions.set(token, user.id);
    return token;
  }

  async logout(token: string): Promise<void> {
    this.sessions.delete(token);
  }

  async validateToken(token: string): Promise<number | null> {
    return this.sessions.get(token) || null;
  }

  private generateToken(userId: number): string {
    return Buffer.from(`${userId}:${Date.now()}`).toString('base64');
  }
}
