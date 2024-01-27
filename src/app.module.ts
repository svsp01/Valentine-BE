import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserQuestionsModule } from './user-questions/user-questions.module';
import { UserAnswerModule } from './user-answers/user-answers.module';


@Module({
  imports: 
    [MongooseModule.forRoot('mongodb+srv://VantaVerseSakthiSvsp:WfeDMZ$CYkThZm2@vantaverselovegame.cjjckqh.mongodb.net/valentine'),  UsersModule, UserQuestionsModule, UserAnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
