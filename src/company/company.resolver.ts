import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Company } from './company.model';
import { CompanyService } from './company.service';

@Resolver((of) => Company)
export class CompanyResolver {
  constructor(private CompanyService: CompanyService) {}

  @Query((returns) => [Company])
  async Companies() {
    return this.CompanyService.findAll();
  }
}
