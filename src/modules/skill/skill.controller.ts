import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import SkillService from './skill.service';
import type { Response } from 'express';

@Controller('skills')
export default class SkillController {
  constructor(private _service: SkillService) {}

  @Get('list')
  async allSkills(@Res() res: Response) {
    const list = await this._service.findAll();
    if (!list)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ mensaje: 'Skills no encontrados' });
    return res.status(HttpStatus.OK).json(list);
  }
}
