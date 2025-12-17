/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Injectable, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,

    private readonly jwtService: JwtService
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
  async  login(logindto: LoginDto) {
  
    const { email, password } = logindto;
    const user = await this.userService.findByEmail(email);

    if (!user) {
      return 'email not found';
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return 'invalid password';
    }

    const payload = {email: user.email}

    const token = await this.jwtService.signAsync(payload)

    return {
      token, 
      email
    }

  }

}
