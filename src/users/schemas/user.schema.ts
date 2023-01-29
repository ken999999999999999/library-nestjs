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
  private _normalizedEmail: string;

  @Prop({ required: true })
  private password: string;

  constructor(username: string, email: string, password: string) {
    super();
    this.username = username;
    this.email = email;
    this._normalizedEmail = this.email.toUpperCase();
    this.setPassword(password);
  }

  get normalizedEmail(): string {
    return this._normalizedEmail;
  }

  private async setPassword(password: string): Promise<void> {
    this.password = await bcrypt.hash(password, await bcrypt.genSalt());
  }

  public async isPasswordMatch(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
