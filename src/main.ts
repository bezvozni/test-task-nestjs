import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    
    whitelist: true,
    forbidNonWhitelisted: true, 
    //github.com/typestack/class-validator/issues/305#issuecomment-504778830
    
    //transform: true,
    transformOptions: { //github.com/nestjs/nest/issues/3156#issuecomment-702617968
      enableImplicitConversion: true
    }

  }));
  await app.listen(3000, () => console.log('Сервер запущен'));
}

bootstrap();
