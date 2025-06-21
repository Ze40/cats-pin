import { Body, Controller, Post, Res } from '@nestjs/common';

import { CreateUserDTO } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDTO, @Res() res: Response) {
    const token = await this.userService.create(user);
  }
}
