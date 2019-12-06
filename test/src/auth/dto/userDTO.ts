// @ts-ignore
import { IsEmail, IsString, Length, IsNumber, IsNotEmpty } from 'class-validator';

export class UserRegDTO {
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsNumber()
    @IsNotEmpty()
    readonly age: number;
}
