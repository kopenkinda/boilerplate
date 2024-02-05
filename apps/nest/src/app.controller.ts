import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ExampleDto } from './dto/example.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('basic-example')
  @ApiOperation({ summary: 'Example request with a basic return type' })
  @ApiCreatedResponse({
    description: 'The message to be returned',
    type: String,
  })
  basicTypeExample(@Body() exampleDto: ExampleDto) {
    return this.appService.getExample(exampleDto);
  }

  @Post('complex-example')
  @ApiOperation({ summary: 'Example request with a complex return type' })
  @ApiCreatedResponse({
    description: 'The message to be returned',
    type: ExampleDto,
  })
  complexTypeExample(@Body() exampleDto: ExampleDto) {
    return exampleDto;
  }
}
