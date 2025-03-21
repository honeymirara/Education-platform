import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, CacheKey } from '@nestjs/cache-manager';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel : Model<User> ,
        @Inject(CACHE_MANAGER) private cacheManager: Cache) { }

    async getAllUsers() {
        const cacheKey = "users";
        const cachedUsers = await this.cacheManager.get<User[]>(cacheKey)
        if (cachedUsers) return cachedUsers;
        const users = await this.userModel.find();
        await this.cacheManager.set(cacheKey, users, 600)
        return users
    }
    getUserById(id) {
        return this.userModel.findById(id)
    }

    async createUser(obj) {
        return this.userModel.create(obj)
    }

    async updateUser(id, obj) {
        return this.userModel.findByIdAndUpdate(id, obj);
    }

    async deleteUserById(id) {
        return this.userModel.findByIdAndDelete(id)
    }

}
