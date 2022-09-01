import { Controller, Get, Put, Delete, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { dataUser } from 'src/dto/create-user.dto';

@Controller('/users')

export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    geAllUsers() {
        return "All users"
    }

    @Get('/11')
    getFindOneUser() {
        const id = 11
        return this.userService.findOne(id)
    }
    @Post('/create')
    createUser(@Body() user: dataUser) {
        console.log(user.id)
        return this.userService.createUser(user)
    }

    @Delete('/delete')
    deleteUser() {
        return this.userService.deleteUser()
    }
    @Put('/update/1')
    editUser() {
        const id = 1
        return this.userService.editUser(id)
    }
}