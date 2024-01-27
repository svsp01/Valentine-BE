import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserAnswer extends Document {
    @Prop()
    userId: string;

    @Prop()
    morningPerson: string;

    @Prop()
    idealVacation: string;

    @Prop()
    creativePerson: string;

    @Prop()
    teamWork: string;

    @Prop()
    stressHandling: string;

    @Prop()
    historicalFigureDinner: string;

    @Prop()
    biggestAccomplishment: string;

    @Prop()
    favoriteMusic: string;

    @Prop()
    preferredCommunication: string;

    @Prop()
    movieGenrePreference: string;
}

export const UserAnswerSchema = SchemaFactory.createForClass(UserAnswer);
