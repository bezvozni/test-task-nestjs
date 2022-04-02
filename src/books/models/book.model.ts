import { AutoIncrement, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({tableName: 'books'})
export class Book extends Model<Book> { //https://stackoverflow.com/questions/71229913
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.STRING, allowNull: false})
  author: string;

  @Column({type: DataType.INTEGER, allowNull: true})
  year: number;

  @Column({type: DataType.BOOLEAN, allowNull: true, defaultValue: false})
  read: boolean;
}