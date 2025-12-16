/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database.module';
import { DistributorsModule } from './distributors/distributors.module';
import { ProductsModule } from './products/products.module';
import { ProcessScheduleModule } from './process_schedule/process_schedule.module';

@Module({
  imports: [UsersModule, DatabaseModule, DistributorsModule, ProductsModule, ProcessScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
