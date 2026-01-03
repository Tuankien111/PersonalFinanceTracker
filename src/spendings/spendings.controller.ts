import { Controller, Get, Post, Query, Redirect, Req } from '@nestjs/common';
import { SpendingsService } from '@/spendings/spendings.service';
import { Spending } from '@/spendings/types';

@Controller('spendings')
export class SpendingsController {
  constructor(private readonly spendingsService: SpendingsService) {}
  @Get()
  show(): string {
    return this.spendingsService.show();
  }

  @Get('add')
  @Redirect('https://nestjs.com', 301)
  create(@Req() request: Request) {
    return `${Request}`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
