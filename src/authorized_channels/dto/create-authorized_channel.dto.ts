/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsInt, IsString } from "class-validator";

export class CreateAuthorizedChannelDto {

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
