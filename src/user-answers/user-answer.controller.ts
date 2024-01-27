import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserAnswerService } from './user-answer.service'
import { UserAnswer } from './user-answer.model';

@Controller('useranswers')
export class UserAnswerController {
    constructor(private readonly userAnswerService: UserAnswerService) {}

    @Get(':userId')
    async getUserAnswers(@Param('userId') userId: string): Promise<UserAnswer> {
        return this.userAnswerService.getUserAnswers(userId);
    }

    @Post(':userId')
    async createUserAnswer(
        @Param('userId') userId: string,
        @Body() userAnswer: Partial<UserAnswer>,
    ): Promise<UserAnswer> {
        return this.userAnswerService.createUserAnswer(userId, userAnswer);
    }
}
