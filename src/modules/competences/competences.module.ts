import { Module } from '@nestjs/common';
import CompetencesController from './competences.controller';
import CompetencesService from './competences.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenceEntity } from 'src/database/entities/competences.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompetenceEntity])],
  controllers: [CompetencesController],
  providers: [CompetencesService],
})
export default class CompetencesModule {}
