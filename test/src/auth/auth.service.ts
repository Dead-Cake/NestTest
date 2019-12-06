import { Repository } from 'typeorm';
import {UserEntity} from '../entity/User';
import { UserRegDTO } from './dto/userDTO';
import { Inject, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async isExists(user: UserRegDTO): Promise<UserEntity> {
    const findOneOptions = {
      email: user.email,
    };

    return await this.userRepository.findOne(findOneOptions);
  }

  async create(user: UserRegDTO) {
    const userEntity = new UserEntity();
    userEntity.email = user.email;
    userEntity.age = user.age;
    userEntity.firstName = user.firstName;
    userEntity.password = user.password;
    userEntity.lastName = user.lastName;
    return await this.userRepository.save(userEntity);
  }

  async registration(user: UserRegDTO): Promise<boolean> {
    const exists = await this.isExists(user);

    if (exists) {
      return false;
      // const errors = {username: 'Username and email must be unique.'};
      // throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);

    } else {
      await this.create(user);
      return true;
    }
  }
}
