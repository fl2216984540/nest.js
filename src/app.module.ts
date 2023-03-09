import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import "reflect-metadata";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port:3306,
    username: 'root',
    password: 'root',
    database:'nest-users'
  })],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
