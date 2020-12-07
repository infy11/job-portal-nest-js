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
  @Mutation((returns) => Vacancy)
  async createVacancy(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('salary') salary: string,
    @Args({ name: 'skills', type: () => [String] }) skills: [string],
    @Args('position') position: string,
    @Args('experience') experience: string,
    @Args('postedBy') postedBy: string,
    @Args('company') company: string,
  ): Promise<Vacancy> {
    return this.vacancyService.create({
      title: title,
      description: description,
      salary: salary,
      company: company,
      position: position,
      experience: experience,
      skills: skills,
      postedBy: postedBy,
    });
  }
}
