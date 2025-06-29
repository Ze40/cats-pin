import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { AddLikeDto } from './dto/add-like.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  public async getCats(@Headers('content-page') page: number) {
    return this.catsService.getCats(page);
  }

  @Get('likes')
  public async getFavoriteCats() {
    return this.catsService.getFavoriteCats();
  }

  @Post('likes')
  public async addLike(@Body() newLike: AddLikeDto) {
    return this.catsService.addLike(newLike);
  }

  @Delete('likes/:catId')
  public async deleteLike(@Param('catId') catId: string) {
    return this.catsService.remuveLike(catId);
  }
}
