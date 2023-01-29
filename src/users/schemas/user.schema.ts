import { BaseSchema } from '@/base.schemas';
import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends BaseSchema {
  @AutoMap()
  @Prop({ required: true, unique: true, trim: true })
  username: string;

  @AutoMap()
  @Prop({ required: true, unique: true, trim: true })
  email: string;

  @Prop({ required: true, unique: true })
  normalizedEmail: string;

  @Prop({ required: true })
  password: string;

  constructor(username: string, email: string) {
    super();
    this.username = username;
    this.email = email;
    this.normalizedEmail = this.email.toUpperCase();
  }

  public static async create(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = new User(username, email);
    await user.setPassword(password);
    return user;
  }

  private async setPassword(password: string): Promise<void> {
    this.password = await bcrypt.hash(password, await bcrypt.genSalt());
  }

  public static isPasswordMatch(
    inputPassword: string,
    userPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(inputPassword, userPassword);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
