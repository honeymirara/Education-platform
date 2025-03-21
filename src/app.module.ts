import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module'
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
  CacheModule.register(),
    UserModule,
    MongooseModule.forRoot('mongodb://localhost/education-platform')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
