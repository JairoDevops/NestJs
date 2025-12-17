/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import e from "express";
import { Column } from "typeorm";


export class AuthDto {
  @IsEmail()    
  @ApiProperty({example: 'jairoalvarado@gmail.com', description: 'User email address'})
   email: string;
    
    @IsString()
    @ApiProperty({example: 'Jairo Alvarado', description: 'Full name of the user'})
    code : string;

    @IsString()
    @ApiProperty({example: 'Jairo Alvarado', description: 'Full name of the user'})
    name : string;

    @IsOptional()
      @IsString()
      @ApiProperty({ example: '555-1234', description: 'Phone number of the user', required: false })

      phone?: string;
    

    @IsString()
    @MinLength(6)
    @ApiProperty()
    @Transform(({ value }) => value.trim())
    password: string;

    
}