import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAnswer, UserAnswerSchema } from './user-answer.model';
import { UserAnswerController } from './user-answer.controller';
import { UserAnswerService } from './user-answer.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserAnswer.name, schema: UserAnswerSchema }])],
    controllers: [UserAnswerController],
    providers: [UserAnswerService],
})
export class UserAnswerModule {}
