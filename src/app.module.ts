import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksModule } from './books/books.module';
import { Book } from './books/models/book.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'test-task',
      models: [Book],
      autoLoadModels: true,
    }),
    BooksModule,
  ],
})
export class AppModule {}