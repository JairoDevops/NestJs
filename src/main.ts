/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Prueba NestJS')
    .setDescription('API de prueba con NestJS')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document);  



  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
