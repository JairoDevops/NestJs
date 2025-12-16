/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DistributorsService } from './distributors.service';
import { DistributorsController } from './distributors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distributor } from './entities/distributor.entity';
import { User } from '../users/entities/user.entity';


@Module({
    imports: [
    TypeOrmModule.forFeature([Distributor, User]), 
  ],
  controllers: [DistributorsController],
  providers: [DistributorsService],
 
})
export class DistributorsModule {}
