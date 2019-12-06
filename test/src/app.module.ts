import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RegistrationController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/User';

@Module({
  imports: [AuthModule,  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'user',
    database: 'test',
    entities: [UserEntity],
    synchronize: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
