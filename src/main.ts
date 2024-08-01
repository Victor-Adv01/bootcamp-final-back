import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.enableCors()

  const options = new DocumentBuilder()
  .setTitle('Proyecto final')
  .setDescription('The movie proyect API')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document);

// fs.writeFileSync('swagger-config.json', JSON.stringify(document, null, 2));
  await app.listen(3001, () => console.info('app listening on port: ', 3001));
}
bootstrap();

