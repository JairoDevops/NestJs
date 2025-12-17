/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";


export class LoginDto {
  @IsEmail()    
  @ApiProperty({example: 'jairo@gmail com', description: 'User email address'})
   email: string;   
    @IsString()
    @MinLength(6)
    @ApiProperty()
    @Transform(({ value }) => value.trim())
    password: string;   

}