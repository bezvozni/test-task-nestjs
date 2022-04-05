import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('BooksController', () => {
  let booksController: BooksController;
  
  const mockBooksServise = {
    showRange: jest.fn(dto => { return 'done'})
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    })
      .overrideProvider(BooksService)
      .useValue(mockBooksServise)
      .compile();

    booksController = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(booksController).toBeDefined();
  });

  it('should throw excepthion', () => {
    expect(() => booksController.addBooks([
      {name: 'test', author: 'definded', year: 0, read: true},
      {name: 'name', author: undefined, year: undefined, read: undefined}
    ])).toThrow('Поля name и author обязательны');
  });

  it('should call method and return its return', () => {
    expect(booksController.showRange({start: 1, limit: 1})).toEqual('done');
    expect(mockBooksServise.showRange).toHaveBeenCalled();
  })
});
