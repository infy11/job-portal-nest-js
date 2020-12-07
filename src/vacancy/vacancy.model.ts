import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Vacancy {
  @Field((type) => String)
  title: string;

  @Field((type) => String)
  description?: string;

  @Field((type) => String)
  salary?: string;

  @Field((type) => [String])
  skills?: [string];

  @Field((type) => String)
  position?: string;

  @Field((type) => String)
  experience?: string;

  @Field((type) => String)
  postedBy: string;

  @Field((type) => String)
  company: string;
}
