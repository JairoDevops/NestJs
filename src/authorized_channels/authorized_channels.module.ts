import { Module } from '@nestjs/common';
import { AuthorizedChannelsService } from './authorized_channels.service';
import { AuthorizedChannelsController } from './authorized_channels.controller';

@Module({
  controllers: [AuthorizedChannelsController],
  providers: [AuthorizedChannelsService],
})
export class AuthorizedChannelsModule {}
