import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { CompanyModule } from '../company/company.module';
import { VacancyModule } from '../vacancy/vacancy.module';

@Module({
  controllers: [UserController],
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    CompanyModule,
    VacancyModule,
  ],
  providers: [UserService, UserResolver, AuthService],
  exports: [UserService],
})
export class UserModule {}
