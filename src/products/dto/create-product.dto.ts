/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import {   IsInt, IsOptional, IsString } from "class-validator";


export class CreateProductDto {
    @IsString()
    @ApiProperty({ example: 'PROD001', description: 'Unique code for the product' })
    code: string;

    @IsString()
    @ApiProperty({ example: 'Product Description', description: 'Description of the product' })
    description: string;

   @IsOptional()
    @ApiProperty({ example: 99.99, description: 'Price of the product' })   
    price: number;

    @IsInt()      
    @ApiProperty({ example: 1, description: 'Distributor ID associated with the product' })  
    distributorId: number;
}
