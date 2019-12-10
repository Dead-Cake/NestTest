import { Module } from '@nestjs/common';
import { RegistrationController } from './auth.controller';
import { AuthService } from './auth.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/User';
import {JwtStrategy} from './jwt.strategy';
import { getRepository } from 'typeorm';
import { ConfigModule } from '../config/config.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [RegistrationController],
  imports: [ConfigModule, TypeOrmModule.forFeature([UserEntity]), PassportModule, JwtModule.register({
    secret: '12345',
    signOptions: { expiresIn: '123456s' },
  })],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
