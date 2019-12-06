import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, Res, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
// import { UserEntity } from '../entity/User';
import { UserRegDTO} from './dto/userDTO';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
// import { User } from './user.decorator';

@Controller('auth')
export class RegistrationController {

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Res() res, @Body() user: UserRegDTO ) {
    const resultOfRegister = await this.authService.registration(user);

    if (resultOfRegister) {
      res.status(HttpStatus.OK).send('register successful!');

    } else {
      res.status(HttpStatus.BAD_REQUEST).send('email must be unique');

    }
  }
  //
  // @Post('login')
  // async loginUser(@Res() res, @Body() user)
}
