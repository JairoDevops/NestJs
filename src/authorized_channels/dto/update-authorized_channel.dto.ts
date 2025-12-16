import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorizedChannelDto } from './create-authorized_channel.dto';

export class UpdateAuthorizedChannelDto extends PartialType(CreateAuthorizedChannelDto) {}
