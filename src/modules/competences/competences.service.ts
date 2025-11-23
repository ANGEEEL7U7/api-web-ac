import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompetenceEntity } from 'src/database/entities/competences.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class CompetencesService {
  constructor(
    @InjectRepository(CompetenceEntity)
    private _repository: Repository<CompetenceEntity>,
  ) {}

  findAll(): Promise<CompetenceEntity[] | null> {
    return this._repository.find({
      select: { id: true, name: true },
      where: {
        status: true,
      },
    });
  }

  findCompetenceById(competenceId: number): Promise<CompetenceEntity | null> {
    return this._repository.findOne({
      select: { id: true, name: true },
      where: {
        id: competenceId,
        status: true,
      },
    });
  }
}
