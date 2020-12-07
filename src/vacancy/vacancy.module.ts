import { Module } from '@nestjs/common';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';
import { VacancyResolver } from './vacancy.resolver';
import { Vacancy, VacancySchema } from './vacancy.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vacancy.name,
        schema: VacancySchema,
      },
    ]),
  ],
  controllers: [VacancyController],
  providers: [VacancyService, VacancyResolver],
})
export class VacancyModule {}
