import { Controller, Post, Body } from '@nestjs/common';
import { AppDto } from './app.dto';
import { AppService } from './app.service';
import { SanitizePayload } from './sanitizer.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @SanitizePayload()
  public getHello(@Body() body: AppDto): any {
    return body;
  }
}
