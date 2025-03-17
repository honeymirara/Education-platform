import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel) { }

    getAllUsers() {
        return this.userModel.find();
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
