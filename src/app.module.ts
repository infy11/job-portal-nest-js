import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacancyModule } from './vacancy/vacancy.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
const path = require('path');

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot('mongodb://root:root@mongo:27017/admin'),
    VacancyModule,
    CompanyModule,
    UserModule,
    VacancyModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
