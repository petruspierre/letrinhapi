import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PracticeWordDocument = PracticeWord & Document;

@Schema()
export class PracticeWord {
  @Prop()
  word: string;

  @Prop()
  length: number;
}

export const PracticeWordSchema = SchemaFactory.createForClass(PracticeWord);
