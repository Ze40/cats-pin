import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DbService } from 'src/db/db.service';
import { Like } from 'src/db/entity/like.entity';

import { AddLikeDto } from './dto/add-like.dto';
import { Cats } from './types/cats.type';

@Injectable()
export class CatsService {
  private apiKey: string;
  private apiUrl: string;
  private catsLimit: number;

  public constructor(
    private readonly configService: ConfigService,
    private readonly dbService: DbService,
  ) {
    this.apiKey = configService.getOrThrow<string>('CATS_API_KEY');
    this.apiUrl = 'https://api.thecatapi.com/v1/images/search';
    this.catsLimit = 20;
  }

  public async getCats(page: number): Promise<Cats[]> {
    const cats = (await fetch(
      `${this.apiUrl}?limit=${this.catsLimit}&page=${page}&order=ASC`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
        },
        redirect: 'follow',
      },
    )
      .then((response) => response.json())
      .catch((error) => console.log(error))) as Cats[];

    const likes = await this.dbService.getLikes();

    likes.forEach(({ cat_id }) => {
      const likedCat = cats.find((cat) => cat.id === cat_id);
      if (likedCat) likedCat.isFavorite = true;
    });

    return cats;
  }

  public async addLike(newLike: AddLikeDto): Promise<Like> {
    try {
      const isExist = await this.dbService.getLikeById(newLike.cat_id);
      if (isExist) {
        throw new ConflictException('Лайк уже поставлен на этого котика');
      }
      const like = this.dbService.addLike(newLike.cat_id);
      return like;
    } catch (error) {
      throw error;
    }
  }
}
