import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './company.schema';
import { CreateCompanyDto } from './company.dto';
import { CreateUserDto } from '../user/user.dto';
import { User } from '../user/user.schema';
import { CompanyModule } from './company.module';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyModel.findOneAndUpdate(
      { name: createCompanyDto.name },
      {
        $set: { name: createCompanyDto.name },
        $push: { users: createCompanyDto.user },
      },
      { new: true, upsert: true },
    );
  }
  async findAll(): Promise<Company[]> {
    return this.companyModel.find({}).exec();
  }
}
