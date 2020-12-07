import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { VacancyService } from './vacancy.service';
import { Vacancy } from './vacancy.model';
@Resolver((of) => Vacancy)
export class VacancyResolver {
  constructor(private vacancyService: VacancyService) {}

  @Query((returns) => [Vacancy])
  async Vacancies() {
    return this.vacancyService.findAll();
  }
}
