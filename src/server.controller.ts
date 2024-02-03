import { All, Controller, Get, Header, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class ServerController {
  @All('/?*')
  @Header('Content-Type', 'text/html')
  root(@Req() request: Request, @Res() response: Response): void {

  }
}
