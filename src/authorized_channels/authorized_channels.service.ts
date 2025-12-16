import { Injectable } from '@nestjs/common';
import { CreateAuthorizedChannelDto } from './dto/create-authorized_channel.dto';
import { UpdateAuthorizedChannelDto } from './dto/update-authorized_channel.dto';

@Injectable()
export class AuthorizedChannelsService {
  create(createAuthorizedChannelDto: CreateAuthorizedChannelDto) {
    return 'This action adds a new authorizedChannel';
  }

  findAll() {
    return `This action returns all authorizedChannels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorizedChannel`;
  }

  update(id: number, updateAuthorizedChannelDto: UpdateAuthorizedChannelDto) {
    return `This action updates a #${id} authorizedChannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorizedChannel`;
  }
}
