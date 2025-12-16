import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorizedChannelsService } from './authorized_channels.service';
import { CreateAuthorizedChannelDto } from './dto/create-authorized_channel.dto';
import { UpdateAuthorizedChannelDto } from './dto/update-authorized_channel.dto';

@Controller('authorized-channels')
export class AuthorizedChannelsController {
  constructor(private readonly authorizedChannelsService: AuthorizedChannelsService) {}

  @Post()
  create(@Body() createAuthorizedChannelDto: CreateAuthorizedChannelDto) {
    return this.authorizedChannelsService.create(createAuthorizedChannelDto);
  }

  @Get()
  findAll() {
    return this.authorizedChannelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizedChannelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorizedChannelDto: UpdateAuthorizedChannelDto) {
    return this.authorizedChannelsService.update(+id, updateAuthorizedChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizedChannelsService.remove(+id);
  }
}
