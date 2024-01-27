import { Controller, Get, Param, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { UserQuestionsService } from './user-question.service';
import { UserQuestions } from './user-questions.model';

@Controller('userquestions')
export class UserQuestionsController {
    constructor(private readonly userQuestionsService: UserQuestionsService) { }

    @Get()
    async getAllUserQuestions(): Promise<UserQuestions[]> {
    return this.userQuestionsService.getAllUserQuestions();
    }

@Get(':id')
async getUserQuestionsById(@Param('id') id: string): Promise<UserQuestions> {
    return this.userQuestionsService.getUserQuestionsById(id);
}


    @Post()
    async createUserQuestions(@Body() userQuestions: UserQuestions[]): Promise<UserQuestions[]> {
        return this.userQuestionsService.createUserQuestions(userQuestions);
    }
}
