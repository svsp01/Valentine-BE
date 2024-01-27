import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserQuestions } from './user-questions.model';


@Injectable()
export class UserQuestionsService {
    constructor(
        @InjectModel(UserQuestions.name) private readonly userQuestionsModel: Model<UserQuestions>,
    ) {}

    async getAllUserQuestions(): Promise<UserQuestions[]> {
        return this.userQuestionsModel.find();
    }

    async getUserQuestionsById(id: string): Promise<UserQuestions> {
        return this.userQuestionsModel.findById(id).exec();
    }

    async createUserQuestions(userQuestions: UserQuestions[]): Promise<UserQuestions[]> {
        return this.userQuestionsModel.create(userQuestions);
    }

}
