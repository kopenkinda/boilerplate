import { Injectable } from '@nestjs/common';
import { ExampleDto } from './dto/example.dto';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello from NestJS!';
  }
  getExample(dto: ExampleDto) {
    return dto.message;
  }
}
