import { Module } from '@nestjs/common';
import { RegistrationController } from './auth.controller';
import { AuthService } from './auth.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/User';
import { getRepository } from 'typeorm';

@Module({
  controllers: [RegistrationController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService],
})
export class AuthModule {}
