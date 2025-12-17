/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorizedChannelDto } from './create-authorized_channel.dto';
import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorizedChannelDto extends PartialType(CreateAuthorizedChannelDto) {
        @IsString()
        @ApiProperty({example: 'Main Channel', description: 'Name of the authorized channel'})
        name: string;
    
        @IsString()
        @ApiProperty({example: 'ABC123', description: 'Unique code for the authorized channel'})
        code: string;
    
    
          @IsInt()
          @ApiProperty({example: 1, description: 'Distributor ID associated with the schedule'})
          distributorId: number;


}
