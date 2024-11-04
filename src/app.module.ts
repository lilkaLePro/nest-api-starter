import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from './database/config/ormConfig';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from 'src/modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig()),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
