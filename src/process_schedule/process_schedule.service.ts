/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProcessScheduleDto } from './dto/create-process_schedule.dto';
import { UpdateProcessScheduleDto } from './dto/update-process_schedule.dto';
import { ProcessSchedule } from './entities/process_schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Distributor } from '../distributors/entities/distributor.entity';

@Injectable()
export class ProcessScheduleService {
 
    constructor(
      @InjectRepository(ProcessSchedule)
      private readonly processScheduleRepository: Repository<ProcessSchedule>,

      @InjectRepository(Distributor)
      private readonly distributorRepository: Repository<Distributor>
    ) {}
 
  async create(createProcessScheduleDto: CreateProcessScheduleDto) {
    const distributor = await this.distributorRepository.findOneBy({
      id: createProcessScheduleDto.distributorId
    });

    if (!distributor) {
      throw new NotFoundException('Distributor not found');
    }

    const processSchedule = this.processScheduleRepository.create({...createProcessScheduleDto, distributor: distributor});

    return this.processScheduleRepository.save(processSchedule);

  }

  findAll() {
    return this.processScheduleRepository.find({relations: ['distributor']});
  }

  findOne(id: number) {
    return `This action returns a #${id} processSchedule`;
  }

  update(id: number, updateProcessScheduleDto: UpdateProcessScheduleDto) {
    return `This action updates a #${id} processSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} processSchedule`;
  }
}
