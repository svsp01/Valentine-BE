import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { User } from './users.model';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Post()
    async createUser(@Body() user: User): Promise<User> {
        return this.userService.createUser(user);
    }
}
