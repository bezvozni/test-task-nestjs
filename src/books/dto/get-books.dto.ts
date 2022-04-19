import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class GetBooksDto {

    @Min(1, {message: '$property не может быть меньше $constraint1'})
    @IsInt({message: '$property должен быть целым числом'})
    @IsNumber({}, {message: '$property должен быть числом'})
    @IsNotEmpty({message: 'Параметр $property обязателен'})
    start: number;
    
    @Min(1, {message: '$property не может быть меньше $constraint1'})
    @IsInt({message: '$property должен быть целым числом'})
    @IsNumber({}, {message: '$property должен быть числом'})
    @IsNotEmpty({message: 'Параметр $property обязателен'})
    limit: number;

}
