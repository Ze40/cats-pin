import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entity/user.entity';
import { RegisterUserDTO } from 'src/users/dto';
import { DeleteResult, Repository } from 'typeorm';

import { Like } from './entity/like.entity';

@Injectable()
export class DbService {
  public constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Like) private likeRepository: Repository<Like>,
  ) {}

  public createUser(user: RegisterUserDTO): Promise<User> {
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

  public async getLikes(): Promise<Like[]> {
    try {
      const likes = await this.likeRepository.find();
      return likes;
    } catch (error) {
      throw error;
    }
  }

  public async addLike(catId: string): Promise<Like> {
    try {
      const like = await this.likeRepository.create({
        cat_id: catId,
      });
      return this.likeRepository.save(like);
    } catch (error) {
      throw error;
    }
  }

  public async getLikeById(catId: string): Promise<Like> | undefined {
    const like = await this.likeRepository.findOneBy({ cat_id: catId });
    if (!like) return undefined;
    return like;
  }

  public async deleteLikeById(catId: string): Promise<DeleteResult> {
    const like = await this.likeRepository.delete({ cat_id: catId });
    return like;
  }
}
