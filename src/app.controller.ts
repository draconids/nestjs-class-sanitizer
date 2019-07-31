import { Controller, Post, Body } from '@nestjs/common';
import { AppDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  public getHello(@Body() body: AppDto): any {
    console.log({ body });
    return body;
  }
}
