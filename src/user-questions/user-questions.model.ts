import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserQuestions extends Document {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    question: string;

    @Prop()
    options?: string[];

    @Prop()
    answer?: string;

    @Prop()
    booleanAnswer?: boolean;
    
    @Prop({ required: true }) 
    gender: string;
}

export const UserQuestionsSchema = SchemaFactory.createForClass(UserQuestions);
