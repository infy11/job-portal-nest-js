import { Controller, Get } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { Vacancy } from './vacancy.model';

@Controller('/vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get()
  getHello(): Promise<Vacancy[]> {
    return this.vacancyService.findAll();
  }
}
