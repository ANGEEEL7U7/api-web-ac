import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillEntity } from '../../database/entities/skill.entity';
import { Repository } from 'typeorm';
import { SkillGroup, SkillGroupItem } from './skill.types';

@Injectable()
export default class SkillService {
  constructor(
    @InjectRepository(SkillEntity)
    private repository: Repository<SkillEntity>,
  ) {}

  async findAll(): Promise<SkillGroup | void> {
    const data = await this.repository
      .createQueryBuilder('skill')
      .innerJoin('skill.typeTechnologie', 'typetec')
      .select([
        'skill.id as skill',
        'skill.name as name',
        'skill.periods as period',
        'typetec.name as tec',
      ])
      .where('skill.status=:status', { status: true })
      .getRawMany<SkillGroupItem>();

    if (!data.length) return;

    const gruops: SkillGroup = {};
    data.map((skill) => {
      if (!gruops[skill.tec]) gruops[skill.tec] = [];
      gruops[skill.tec].push(skill);
    });

    return gruops;
  }
}
