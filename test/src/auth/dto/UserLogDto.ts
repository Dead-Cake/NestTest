import { IsEmail, IsString, Length, IsNumber, IsNotEmpty } from 'class-validator';

export class UserLogDTO {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
