import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcessScheduleService } from './process_schedule.service';
import { CreateProcessScheduleDto } from './dto/create-process_schedule.dto';
import { UpdateProcessScheduleDto } from './dto/update-process_schedule.dto';

@Controller('process-schedule')
export class ProcessScheduleController {
  constructor(private readonly processScheduleService: ProcessScheduleService) {}

  @Post()
  create(@Body() createProcessScheduleDto: CreateProcessScheduleDto) {
    return this.processScheduleService.create(createProcessScheduleDto);
  }

  @Get()
  findAll() {
    return this.processScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.processScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcessScheduleDto: UpdateProcessScheduleDto) {
    return this.processScheduleService.update(+id, updateProcessScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.processScheduleService.remove(+id);
  }
}
