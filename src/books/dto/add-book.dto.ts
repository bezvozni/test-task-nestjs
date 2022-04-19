import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Max } from 'class-validator';

export class AddBookDto {

    @IsString({message: '$property должно быть строковым значением'})
    @IsNotEmpty({message: 'Поле $property обязательно'})
    readonly name: string;

    @IsString({message: '$property должно быть строковым значением'})
    @IsNotEmpty({message: 'Поле $property обязательно'})
    readonly author: string;

    @Max(new Date().getFullYear(), {message: '$property не может быть больше $constraint1'})
    @IsInt({message: '$property должен быть целым числом'})
    @IsNumber({}, {message: '$property должен быть числом'})
    @IsOptional()
    readonly year: number;

    @IsBoolean({message: '$property может быть только true или false'})
    @IsOptional()
    readonly read: boolean;

}
