import { DocumentBuilder } from '@nestjs/swagger';

export const openApiConfig = new DocumentBuilder()
  .setTitle('Bootstrap repo')
  .setDescription('The bootstrap repo description')
  .setVersion('1.0')
  .addTag('example')
  .build();
