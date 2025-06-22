import {
  Catch,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    this.apiUrl = 'https://api.thecatapi.com/v1/images';
    this.catsLimit = 20;
  }

  public async getCats(page: number): Promise<Cats[]> {
    const cats = (await fetch(
      `${this.apiUrl}/search?limit=${this.catsLimit}&page=${page}&order=ASC`,
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

    if (!cats) {
      throw new NotFoundException('Не удалось получить котиков');
    }

    const likes = await this.dbService.getLikes();

    likes.forEach(({ cat_id }) => {
      const likedCat = cats.find((cat) => cat.id === cat_id);
      if (likedCat) likedCat.isFavorite = true;
    });

    return cats;
  }

  public async getFavoriteCats(): Promise<Cats[]> {
    const likes = await this.dbService.getLikes();

    if (!likes.length) {
      return [];
    }

    const favoriteCats: Cats[] = await Promise.all(
      likes.map(async (like) => {
        const response = await fetch(`${this.apiUrl}/${like.cat_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': this.apiKey,
          },
          redirect: 'follow',
        });

        if (!response.ok) {
          throw new NotFoundException(
            `Не удалось найти кота с id: ${like.cat_id}`,
          );
        }
        return response.json();
      }),
    );

    return favoriteCats.map((cat) => {
      cat.isFavorite = true;
      return cat;
    });
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

  public async remuveLike(catId: string): Promise<{ succes: boolean }> {
    try {
      const res = await this.dbService.deleteLikeById(catId);
      if (res.affected > 0) return { succes: true };
      return { succes: false };
    } catch (error) {
      throw error;
    }
  }
}
