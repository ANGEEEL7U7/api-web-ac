import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import EducationService from './education.service';
import type { Response } from 'express';

@Controller('education')
export default class EducationController {
  constructor(private _service: EducationService) {}

  @Get('list')
  async allEducation(@Res() res: Response) {
    const list = await this._service.findAll();
    if (!list?.length)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ mensaje: 'Educaciones no encontrados' });
    return res.status(HttpStatus.OK).json(list);
  }
}
