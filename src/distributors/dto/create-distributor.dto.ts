/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,  IsInt, IsString } from "class-validator";


export class CreateDistributorDto {

        @IsString()
        @ApiProperty({ example: 'DISTR001', description: 'Unique code for the distributor' })
        code: string;

        @IsString()
        @ApiProperty({ example: 'Distributor Name', description: 'Name of the distributor' })
        name: string;
        
        @IsEmail()
        @ApiProperty({ example: 'Kinal@gmail.com', description: 'Email address of the distributor' })
        email_notifications: string;

        @IsEmail()
        @ApiProperty({ example: 'Kinal@gmail.com', description: 'Email address of the distributor' })
        email_alert: string;


         @IsInt()
        @ApiProperty({ example: 1, description: 'User ID associated with the distributor' })
        userId: number;

}
