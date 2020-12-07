import { Role } from './role.enum';
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  company: string;
  roles: [Role];
}
