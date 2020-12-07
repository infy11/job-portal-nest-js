import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field((type) => String)
  name: string;

  @Field((type) => [String])
  users?: [string];
}
