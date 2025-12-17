/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Injectable, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService
  ) {}


  @Post('register')
  async register(  @Body()  authDto: AuthDto) {
    const   {email ,  name, password} = authDto;

   const hashed = await bcrypt.hash(password, 10);

    const user =  await this.userService.create({
      email,
      name, 
      password: hashed,
      code: authDto.code
      
      });


    return user;
    }

  @Post('login')
  async  login(@Body() logindto: LoginDto) {

  }

}
