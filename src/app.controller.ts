import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TranslateDto } from './dto';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('translate')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('translate')
  async getTranslate(@Body() dto: TranslateDto) {
    return await this.appService.getTranslate(dto);
  }
}
