/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer/types/decorators/type.decorator';
import { CreateDistributorDto } from './create-distributor.dto';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class UpdateDistributorDto extends PartialType(CreateDistributorDto) {
        @IsOptional()
        @IsString()
        @ApiProperty({ example: 'DISTR001', description: 'Unique code for the distributor' })
        code: string;
        
        @IsOptional()
        @IsString()
        @ApiProperty({ example: 'Distributor Name', description: 'Name of the distributor' })
        name: string;
        
        @IsOptional()
        @IsEmail()
        @ApiProperty({ example: 'Kinal@gmail.com', description: 'Email address of the distributor' })
        email_notifications: string;

        @IsOptional()
        @IsEmail()
        @ApiProperty({ example: 'Kinal@gmail.com', description: 'Email address of the distributor' })
        email_alert: string;

        @IsOptional()
        @IsInt()
        @ApiProperty({ example: 1, description: 'User ID associated with the distributor' })
        userId: number;


}
