import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configurationService } from './config/config.service';

const PORT = configurationService.getValue('PORT');
const logger = new Logger('CORS')
async function bootstrap() {
  var whitelist = ['https://ecorota.com', 'https://ecorota.com/orders','http://localhost:3000', 'http://localhost:5000', undefined, "undefined"];
  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: ['content-type'],
      origin: function (origin, callback) {
          callback(null, true);
      },
      methods: 'GET,POST,PUT,DELETE,PATCH',
    },
  });
  app.useGlobalPipes(new ValidationPipe());
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
