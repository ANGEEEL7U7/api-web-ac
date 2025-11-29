import { Module } from '@nestjs/common';
import CompanieController from './companie.controller';
import CompanieService from './companie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from '../../database/entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompanieController],
  providers: [CompanieService],
})
export default class CompanieModule {}
