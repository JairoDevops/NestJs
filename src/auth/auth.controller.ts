/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService){}

  @Post('register')
  register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto);
  }

  @Post('login')
  login(logindto: LoginDto) {
    return this.authService.login(logindto)
  }
}
