import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { User, UserSchema } from './users.model';
import { UserQuestions, UserQuestionsSchema } from '../user-questions/user-questions.model';
import { UserQuestionsController } from '../user-questions/user-questions.controller';
import { UserQuestionsService } from '../user-questions/user-question.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: UserQuestions.name, schema: UserQuestionsSchema }])],
    controllers: [UserController, UserQuestionsController],
    providers: [UserService, UserQuestionsService],
})
export class UsersModule {}
