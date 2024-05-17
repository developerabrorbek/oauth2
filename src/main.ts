import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // using cookie parser
  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));


  const config = new DocumentBuilder()
    .setTitle('OAuth2 API Documentation')
    .setDescription('The OAuth20 API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
