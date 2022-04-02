Post запрос к `localhost:3000/api/books` с json'ом:
```
[
  {
    "name": "Название книги",
    "author": "Автор книги"
  },
  {
    "name": "Название следующей книги",
    "author": "Автор этой книги"
  }
]
```
добавит в базу две книги с указаным названием и автором.

Get запрос `localhost:3000/api/books?start=3&limit=5` покажет пять книг, начиная с третьей позиции (если таковые имеются)

Данные БД указаны в app.module.ts