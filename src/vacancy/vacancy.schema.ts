import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vacancy {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  salary: string;

  @Prop()
  skills: [string];

  @Prop()
  position: string;

  @Prop()
  experience: string;

  @Prop()
  postedBy: string;

  @Prop()
  company: string;
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
export type VacancyDocument = Vacancy & Document;
