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
  @Mutation((returns) => Company)
  async createCompany(
    @Args('name') name: string,
    @Args('email') email: string,
  ): Promise<Company> {
    return this.CompanyService.create({
      name: name,
      user: email,
    });
  }
}
