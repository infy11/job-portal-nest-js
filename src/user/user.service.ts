import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async find(email: string): Promise<User> {
    return this.UserModel.findOne({ email: email }).lean();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find({}).exec();
  }

  async login(user: any) {
    const payload: User = await this.find(user.username);
    return {
      access_token: this.jwtService.sign(
        { username: payload.email, password: payload.password },
        { secret: 'secret' },
      ),
    };
  }
}
