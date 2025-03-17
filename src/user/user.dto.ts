import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Length,
    MinLength
} from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @Length(2, 10)
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}