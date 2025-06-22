import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../utils/guards/auth.guard';
import { LoginUserDto, RegisterUserDTO } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDTO) {
    const token = await this.userService.register(dto);
    return { success: true, token };
  }

  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    const token = await this.userService.login(dto);
    return { success: true, token };
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async logout(@Body('token') token: string) {
    await this.userService.logout(token);
    return { success: true };
  }

  @Get('check')
  @UseGuards(AuthGuard)
  async checkAuth(@Request() req) {
    return { isAuthenticated: true, userId: req.userId };
  }
}
