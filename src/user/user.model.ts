import { Field, ObjectType } from '@nestjs/graphql';

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
}
