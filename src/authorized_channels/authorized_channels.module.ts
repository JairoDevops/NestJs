import { Module } from '@nestjs/common';
import { AuthorizedChannelsService } from './authorized_channels.service';
import { AuthorizedChannelsController } from './authorized_channels.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthorizedChannel } from './entities/authorized_channel.entity';
import { Distributor } from '../distributors/entities/distributor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorizedChannel, Distributor])],
  controllers: [AuthorizedChannelsController],
  providers: [AuthorizedChannelsService],
})
export class AuthorizedChannelsModule {}
