import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import {Token} from './TokenOutput';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private authService: AuthService,
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
  async Users() {
    return this.userService.findAll();
  }

  @Mutation((returns) => User)
  async createItem(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('company') company: string,
  ): Promise<User> {
    return this.userService.create({
      name: name,
      email: email,
      password: password,
      company: company,
    });
  }
}
