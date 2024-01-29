import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { User } from './users.model';
import { UserService } from './users.service';
import { LoveLanguageCardService } from './love-language-card.service';
import { Response } from 'express';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly loveLanguageCardService: LoveLanguageCardService,
    ) {}

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

    @Get(':id/love-language-card')
    async generateLoveLanguageCard(@Param('id') userId: string, @Res() res: Response): Promise<void> {
        try {
            const result: any = await this.loveLanguageCardService.generateLoveLanguageCard(userId);
            await console.log('Card generated:', result.loveLanguageCardPath);
            res.json(result);
        } catch (error) {
            console.error('Error generating card:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }

}
