/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateProcessScheduleDto {

  @IsString()
  @ApiProperty({example: '08:00',description: 'Process start time (HH:mm format)'})
  startDate: string;

  @IsString()
  @ApiProperty({example: '18:00',description: 'Process end time (HH:mm format)' })
  endDate: string;

  @IsInt()
  @ApiProperty({example: 1, description: 'Distributor ID associated with the schedule'})
  distributorId: number;
}
