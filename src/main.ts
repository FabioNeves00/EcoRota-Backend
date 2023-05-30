import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configurationService } from './config/config.service';

const PORT = configurationService.getValue('PORT');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['https://www.ecorota.com/', 'http://localhost:3000', 'https://localhost:3000', 'http://localhost:5000', 'http://localhost:5000'],
  });
  const config = new DocumentBuilder()
    .setTitle('Backend EcoRota')
    .setDescription('API Routes and data')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}
bootstrap();
