/* eslint-disable prettier/prettier */
import {IsString, IsEmail, IsOptional,  ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDistributorDto } from '../../distributors/dto/create-distributor.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';


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

  @IsString()
  @ApiProperty({ example: 'securePassword123', description: 'Password for the user account' })
  password: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '555-1234', description: 'Phone number of the user', required: false })
 @Column({ nullable: true })
  phone?: string;




 

 

}
