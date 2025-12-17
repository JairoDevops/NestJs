/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database.module';
import { DistributorsModule } from './distributors/distributors.module';
import { ProductsModule } from './products/products.module';
import { ProcessScheduleModule } from './process_schedule/process_schedule.module';
import { AuthorizedChannelsModule } from './authorized_channels/authorized_channels.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, DatabaseModule, DistributorsModule, ProductsModule, ProcessScheduleModule, AuthorizedChannelsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
