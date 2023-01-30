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

    @Delete('/:id')
    deleteUser(@Param('id') id):string {
        console.log(id);
        return this.userService.deleteUser()
    }
    @Put('/:id')
    updateUser(@Param('id') id, @Body()user:dataUser) {
        return this.userService.editUser(id, user)
    }
}