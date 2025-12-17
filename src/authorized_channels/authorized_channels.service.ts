/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorizedChannelDto } from './dto/create-authorized_channel.dto';
import { UpdateAuthorizedChannelDto } from './dto/update-authorized_channel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorizedChannel } from './entities/authorized_channel.entity';
import { Repository } from 'typeorm';
import { Distributor } from '../distributors/entities/distributor.entity';

@Injectable()
export class AuthorizedChannelsService {
// eslint-disable-next-line prettier/prettier

  constructor(
    @InjectRepository(AuthorizedChannel) 
    private authorizedChannelRepository: Repository<AuthorizedChannel>,

    @InjectRepository(Distributor)
    private distributorRepository: Repository<Distributor>,

  ) {}


 async create(createAuthorizedChannelDto: CreateAuthorizedChannelDto) {

    const distributors = await this.distributorRepository.findOneBy({id: createAuthorizedChannelDto.distributorId});
      if (!distributors) {
           throw new NotFoundException('Distribuidor no existe');
      }

      const authorizedChannel = this.authorizedChannelRepository.create({...createAuthorizedChannelDto, distributors});
      return this.authorizedChannelRepository.save(authorizedChannel);

 }

  

  findAll() {
    return this.authorizedChannelRepository.find();
  }

  findOne(id: number) {
    return this.authorizedChannelRepository.findOneBy({id});
  }

  update(id: number, updateAuthorizedChannelDto: UpdateAuthorizedChannelDto) {
    return `This action updates a #${id} authorizedChannel`;
  }

  remove(id: number) {
    return this.authorizedChannelRepository.delete(id)
  }
}
