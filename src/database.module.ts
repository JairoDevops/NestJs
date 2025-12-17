/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distributor } from './distributors/entities/distributor.entity';
import { Product } from './products/entities/product.entity';
import { User } from './users/entities/user.entity';
import { ProcessSchedule } from './process_schedule/entities/process_schedule.entity';
import { AuthorizedChannel } from './authorized_channels/entities/authorized_channel.entity';


@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',   
      port: 3306,         
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Distributor, Product, User, ProcessSchedule, AuthorizedChannel],
      synchronize: true,
    }),
  ],

  
})
export class DatabaseModule {}