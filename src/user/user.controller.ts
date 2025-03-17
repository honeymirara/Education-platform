import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAllUsers() {
        return await this.userService.getAllUsers()
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return await this.userService.getUserById(id)
    }

    @Post()
    async createUser(@Body() obj: { name: string, email: string, age: number, password: string }) {
        return await this.userService.createUser(obj)
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() obj) {
        return await this.userService.updateUser(id, obj)
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: string) {
        return await this.userService.deleteUserById(id)
    }

}
