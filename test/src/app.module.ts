import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RegistrationController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot()],
  controllers: [AppController, RegistrationController],
  providers: [AppService],
})
export class AppModule {}
