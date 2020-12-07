import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

  async delete(vacancyTitle: string): Promise<any> {
    const returnValue = await this.VacancyModel.deleteOne({
      title: vacancyTitle,
    });
    if (returnValue.ok) {
      return true;
    }
    throw new HttpException('unable to delete', HttpStatus.BAD_REQUEST);
  }
  async update(createVacancyDto: CreateVacancyDto): Promise<any> {
    const returnValue = await this.VacancyModel.updateOne(
      { title: createVacancyDto.title },
      createVacancyDto,
    );
    if (returnValue.ok) {
      return true;
    }
    throw new HttpException('unable to update', HttpStatus.BAD_REQUEST);
  }

  async findAll(): Promise<Vacancy[]> {
    return this.VacancyModel.find({}).exec();
  }
}
