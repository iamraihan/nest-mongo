import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop({
    type: String,
    required: true,
  })
  firstName!: string;

  @Prop({
    type: String,
    required: false,
  })
  lastName!: string;

  @Prop({
    type: String,
    required: true,
  })
  email!: string;

  @Prop({
    type: String,
    required: true,
  })
  password!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
