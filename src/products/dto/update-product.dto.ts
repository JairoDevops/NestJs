/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
 @IsString()
    
    @ApiProperty({ example: 'PROD001', description: 'Unique code for the product' })
    @IsOptional()
    code: string;

    @IsString()
     @IsOptional()
    @ApiProperty({ example: 'Product Description', description: 'Description of the product' })
    description: string;

   @IsOptional()
    @ApiProperty({ example: 99.99, description: 'Price of the product' })   
    price: number;

    @IsInt()    
     @IsOptional()  
    @ApiProperty({ example: 1, description: 'Distributor ID associated with the product' })  
    distributorId: number;



}
