import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { IsLogin } from 'src/utils/validators';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Логин обязателен' })
  @IsString({ message: 'Логин должен быть строкой' })
  @MaxLength(30, { message: 'Максимальная длина логина 30 символов' })
  @IsLogin()
  login: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Длина пароля должна минимум 6 символов' })
  password: string;
}
