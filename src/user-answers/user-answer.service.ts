import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserAnswer } from './user-answer.model';

@Injectable()
export class UserAnswerService {
    constructor(
        @InjectModel(UserAnswer.name) private readonly userAnswerModel: Model<UserAnswer>,
    ) {}

    async getUserAnswers(userId: string): Promise<UserAnswer> {
        return this.userAnswerModel.findOne({ userId }).exec();
    }

    async createUserAnswer(userId: string, userAnswer: Partial<UserAnswer>): Promise<UserAnswer> {
        const createdUserAnswer = new this.userAnswerModel({ userId, ...userAnswer });
        return createdUserAnswer.save();
    }
}
