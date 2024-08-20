import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = 8080;
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI
  });

  // app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('GC CDS POC')
    // .setDescription('The cats API description')
    .setVersion('1.0')
    .addServer('')
    .addServer('api/cds')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT, () => {
    Logger.log(`App running on port ${PORT}`)
    console.log(`App running on port ${PORT}`);
  });
}
bootstrap();
