import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from './role.enum';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  company: string;

  @Prop()
  roles: [Role];
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
