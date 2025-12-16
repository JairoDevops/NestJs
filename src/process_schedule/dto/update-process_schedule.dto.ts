/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessScheduleDto } from './create-process_schedule.dto';

export class UpdateProcessScheduleDto extends PartialType(CreateProcessScheduleDto) {}
