import { IsNotEmpty, IsString } from 'class-validator';

export class AddLikeDto {
  @IsNotEmpty({ message: 'ID кота обязателен' })
  @IsString({ message: 'ID должен быть сторокой' })
  cat_id: string;
}
