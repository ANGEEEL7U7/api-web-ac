import type { Response } from 'express';
import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import CompetencesService from './competences.service';

@Controller('competences')
export default class CompetencesController {
  constructor(private _service: CompetencesService) {}

  @Get('list')
  async allCompetences(@Res() response: Response) {
    const competences = await this._service.findAll();
    if (!competences?.length)
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ mensaje: 'Competencias no encontrados' });
    return response.status(HttpStatus.OK).json(competences);
  }

  @Get(':item')
  async getItem(@Param('item') item: number, @Res() response: Response) {
    const competence = await this._service.findCompetenceById(item);
    if (!competence)
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ mensaje: 'Competencia no encontrado' });
    return response.status(HttpStatus.OK).json(competence);
  }
}
