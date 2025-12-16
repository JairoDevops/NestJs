/* eslint-disable prettier/prettier */
import {IsString, IsEmail, IsOptional,  ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDistributorDto } from '../../distributors/dto/create-distributor.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Distributor } from '../../distributors/entities/distributor.entity';
import { JoinColumn } from 'typeorm/browser/decorator/relations/JoinColumn.js';
import { OneToOne } from 'typeorm/browser/decorator/relations/OneToOne.js';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: 'USR001', description: 'Unique code for the user' })
  code: string;

  @IsString()
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' }) 
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'jairoalvarado2005@gmail.com', description: 'Email address of the user' })  
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '555-1234', description: 'Phone number of the user', required: false })
  phone?: string;


 

 

}
