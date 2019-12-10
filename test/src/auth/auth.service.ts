import {Repository} from 'typeorm';
import {UserEntity} from '../entity/User';
import {UserRegDTO} from './dto/userRegDTO';
import {UserLogDTO} from './dto/UserLogDto';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>, private readonly jwtService: JwtService) {}

  async isExists(user: UserRegDTO): Promise<UserEntity> {
    const findOneOptions = {
      email: user.email,
    };

    return this.userRepository.findOne(findOneOptions);
  }

  async create(user: UserRegDTO) {
    const userEntity = new UserEntity();
    userEntity.email = user.email;
    userEntity.age = user.age;
    userEntity.firstName = user.firstName;
    userEntity.password = user.password;
    userEntity.lastName = user.lastName;
    return this.userRepository.save(userEntity);
  }

  async registration(user: UserRegDTO): Promise<boolean> {
    const exists = await this.isExists(user);

    if (exists) {
      return false;
    } else {
      await this.create(user);
      return true;
    }
  }

  async login(user: UserLogDTO) {
    const result = await this.findUser(user);
    if (result > 0) {
      const payload = { sub: result };

      const token = await this.jwtService.sign(payload);
      return {
        access_token: this.jwtService.sign(payload),
      };
      return {token};
    } else {
      return {error: 'You not authorizen'};
    }

  }

  async findUser(userDto: UserLogDTO): Promise<number> {
    const userLoginDto = {
      email: userDto.email,
  };
    const user = await this.userRepository.findOne(userLoginDto);
    const result = await bcrypt.compare(userDto.password, user.password);

      // res == true
    if (result) {
      return user.id;
    } else {
      return 0;
    }
  }
}
