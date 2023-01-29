import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { CurrentUserService } from './services/current-user.service';
import { UsersService } from './services/users.service';
import { UsersProfile } from './users.profile';
@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService, UsersProfile, CurrentUserService],
  exports: [UsersService, CurrentUserService],
})
export class UsersModule {}
