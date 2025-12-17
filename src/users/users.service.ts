/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(User)
      private readonly userRepo: Repository<User>,
    ) {}
 

  create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);  
    
  }

  findAll() {
    return this.userRepo.find()
  }


  findByEmail(email: string) {
    return this.userRepo.findOneBy({email});
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({id});
  }

  update(id: number , updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepo.delete({id});
  }
}
