import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema()
export class User {
  @Prop({required: true})
  name: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop({default: 18, min: 16})
  age: number;

  @Prop({required:true, minlength: 8})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);