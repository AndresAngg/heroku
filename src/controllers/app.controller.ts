import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('/saludo')
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
