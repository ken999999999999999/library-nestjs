import { BaseSchema } from '@/base.schemas';
import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Role } from '@/roles/role.enum';

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
  private password: string;

  @Prop()
  roles: Role[];

  constructor(username: string, email: string) {
    super();
    this.username = username;
    this.email = email;
    this.normalizedEmail = this.email.toUpperCase();
    this.roles = [Role.User];
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
    const round = 10;
    this.password = await bcrypt.hash(password, await bcrypt.genSalt(round));
  }

  isPasswordMatch(inputPassword: string): Promise<boolean> {
    return bcrypt.compare(inputPassword, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.loadClass(User);
