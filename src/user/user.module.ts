import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from 'src/schemas/user.schema';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    CacheModule.register(),
],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
