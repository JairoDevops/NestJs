/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Distributor } from '../distributors/entities/distributor.entity';


@Injectable()
export class ProductsService {
  
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,

    @InjectRepository(Distributor)
    private readonly distributorRepo: Repository<Distributor>,
  ){}


  
   async create(createProductDto: CreateProductDto) {
    const distributor = await this.distributorRepo.findOneBy({id: createProductDto.distributorId});
    if (!distributor) {
         throw new NotFoundException('Distribuidor no existe');
    }

    const product = this.productRepo.create({...createProductDto, distributor});
    return this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find()
  }

  findOne(id: number) {
    return this.productRepo.findOneBy({id});
  }

async update(id: number, dto: UpdateProductDto) {
  const product = await this.productRepo.findOneBy({ id });

  if (!product) {
    throw new NotFoundException('Product not found');
  }

  if (dto.distributorId) {
    const distributor = await this.distributorRepo.findOneBy({
      id: dto.distributorId,
    });

    if (!distributor) {
      throw new NotFoundException('Distributor not found');
    }
    product.distributor = distributor;
  }

  Object.assign(product, dto);

  return this.productRepo.save(product);
}



  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
