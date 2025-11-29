import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from '../../database/entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class CompanieService {
  constructor(
    @InjectRepository(CompanyEntity)
    private _repository: Repository<CompanyEntity>,
  ) {}

  async findAll(): Promise<CompanyEntity[] | void> {
    return this._repository.find({
      select: { technologiesSkill: { name: true } },
      relations: {
        technologiesSkill: true,
      },
      order: { dateStart: 'ASC' },
    });
  }

  async findById(company: number): Promise<CompanyEntity | null> {
    return this._repository
      .createQueryBuilder('company')
      .innerJoinAndSelect('company.activities', 'act')
      .select(['company.name'])
      .addSelect(['act.description'])
      .where('company.id=:id', { id: company })
      .getOne();
  }
}
