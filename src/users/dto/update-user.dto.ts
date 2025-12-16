/* eslint-disable prettier/prettier */
import { PartialType, ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { UpdateDistributorDto } from '../../distributors/dto/update-distributor.dto';
import { Type } from 'class-transformer';
import { CreateDistributorDto } from '../../distributors/dto/create-distributor.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
