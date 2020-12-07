import {
  Args,
  Mutation,
  Query,
  Resolver,
  registerEnumType,
} from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { Token } from './TokenOutput';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './GQLAuthGuard';
import { RolesGuard } from './roles.guard';
import { Role } from './role.enum';
import { Roles } from './role.decorator';
import { VacancyService } from '../vacancy/vacancy.service';
import { Vacancy } from '../vacancy/vacancy.model';
import { CurrentUser } from './getCurrentUser';

registerEnumType(Role, {
  name: 'Role',
});

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private vacancyService: VacancyService,
  ) {}

  @Query((returns) => Token)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return this.userService.login({
      username: username,
      password: password,
    });
  }

  @Query((returns) => [User])
  @Roles(Role.Admin)
  @UseGuards(GqlAuthGuard, RolesGuard)
  async Users() {
    return this.userService.findAll();
  }

  @Mutation((returns) => User)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('company') company: string,
    @Args({ name: 'roles', type: () => [String] }) roles: [Role],
  ): Promise<User> {
    return this.userService.create({
      name: name,
      email: email,
      password: password,
      company: company,
      roles: roles,
    });
  }

  @Mutation((returns) => Vacancy)
  @Roles(Role.Admin)
  @UseGuards(GqlAuthGuard, RolesGuard)
  async createVacancy(
    @CurrentUser() user: User,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('salary') salary: string,
    @Args({ name: 'skills', type: () => [String] }) skills: [string],
    @Args('position') position: string,
    @Args('experience') experience: string,
  ): Promise<Vacancy> {
    return this.vacancyService.create({
      title: title,
      position: position,
      experience: experience,
      company: user.company,
      description: description,
      salary: salary,
      postedBy: user.email,
      skills: skills,
    });
  }
  @Mutation((returns) => Boolean)
  @Roles(Role.Admin)
  @UseGuards(GqlAuthGuard, RolesGuard)
  async updateVacancy(
    @CurrentUser() user: User,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('salary') salary: string,
    @Args({ name: 'skills', type: () => [String] }) skills: [string],
    @Args('position') position: string,
    @Args('experience') experience: string,
  ): Promise<Vacancy> {
    return this.vacancyService.update({
      title: title,
      position: position,
      experience: experience,
      company: user.company,
      description: description,
      salary: salary,
      postedBy: user.email,
      skills: skills,
    });
  }

  @Mutation((returns) => Boolean)
  @Roles(Role.Admin)
  @UseGuards(GqlAuthGuard, RolesGuard)
  async deleteVacancy(
    @CurrentUser() user: User,
    @Args('title') title: string,
  ): Promise<Vacancy> {
    return this.vacancyService.delete(title);
  }
}
