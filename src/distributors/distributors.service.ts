/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Distributor } from './entities/distributor.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class DistributorsService {
  constructor(

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Distributor)
    private readonly distributorRepo: Repository<Distributor>,
  ) {}

  findAll() {
    return this.distributorRepo.find();
  }


 async create(createDistributorDto: CreateDistributorDto) {
    const user = await this.userRepo.findOneBy({id: createDistributorDto.userId});
      if (!user) {
      throw new NotFoundException('Usuario no existe');
    }
   
    const distributor = this.distributorRepo.create({...createDistributorDto, user});
    return this.distributorRepo.save(distributor);
  }

  findOne(id: number) {
    return this.distributorRepo.findOneBy({id});
  }

 async update(id: number, updateDistributorDto: UpdateDistributorDto) {
  const distributor = await this.distributorRepo.preload({
    id,
    ...updateDistributorDto,
  });

  if (!distributor) {
    throw new NotFoundException('Distribuidor no existe');
  }

  if (updateDistributorDto.userId) {
    const user = await this.userRepo.findOneBy({
      id: updateDistributorDto.userId,
    });

    if (!user) {
      throw new NotFoundException('Usuario no existe');
    }

    distributor.user = user;
  }

  return this.distributorRepo.save(distributor);
}

  remove(id: number) {
    return this.distributorRepo.delete(id); 
  }
}

