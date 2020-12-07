import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from './role.enum';
@ObjectType()
export class User {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  email?: string;

  @Field((type) => String)
  password?: string;

  @Field((type) => String)
  company?: string;

  @Field((type) => [Role])
  roles?: [Role];
}
