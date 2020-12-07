import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vacancy, VacancyDocument } from './vacancy.schema';
import { Model } from 'mongoose';
import { CreateVacancyDto } from './vacancy.dto';

@Injectable()
export class VacancyService {
  constructor(
    @InjectModel(Vacancy.name) private VacancyModel: Model<VacancyDocument>,
  ) {}

  async create(createVacancyDto: CreateVacancyDto): Promise<Vacancy> {
    const createdVacancy = new this.VacancyModel(createVacancyDto);
    return createdVacancy.save();
  }

  async findAll(): Promise<Vacancy[]> {
    return this.VacancyModel.find({}).exec();
  }
}
