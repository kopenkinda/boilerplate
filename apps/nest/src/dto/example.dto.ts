import { ApiProperty } from '@nestjs/swagger';

export class ExampleDto {
  @ApiProperty({
    type: String,
    description: 'The message to be returned',
  })
  message!: string;
}
