import { Module } from '@nestjs/common';
import { ProcessScheduleService } from './process_schedule.service';
import { ProcessScheduleController } from './process_schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessSchedule } from './entities/process_schedule.entity';
import { Distributor } from '../distributors/entities/distributor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessSchedule, Distributor])],
  controllers: [ProcessScheduleController],
  providers: [ProcessScheduleService],
})
export class ProcessScheduleModule {}
