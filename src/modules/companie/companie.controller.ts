import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import CompanieService from './companie.service';

@Controller('company')
export default class CompanieController {
  constructor(private _service: CompanieService) {}

  @Get('list')
  async findAll(@Res() res: Response) {
    const list = await this._service.findAll();
    if (!list)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ mensaje: 'Companias no encontrados' });

    return res.status(HttpStatus.OK).json(list);
  }

  @Get('activities-company/:company')
  async findActivitiesCompany(
    @Param('company') company: number,
    @Res() res: Response,
  ) {
    const item = await this._service.findById(company);
    if (!item)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ mensaje: 'Compania no encontrado' });
    return res.status(HttpStatus.OK).json(item);
  }
}
