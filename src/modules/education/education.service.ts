import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EducationEntity } from '../../database/entities/education.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class EducationService {
  constructor(
    @InjectRepository(EducationEntity)
    private _repo: Repository<EducationEntity>,
  ) {}

  findAll(): Promise<EducationEntity[] | null> {
    return this._repo.find();
  }
}
