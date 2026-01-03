import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { CatsController } from '@/cats/cats.controller';
import { CatsService } from '@/cats/cats.service';
import { SpendingsController } from './spendings/spendings.controller';
import { CategoriesController } from './categories/categories.controller';
import { SpendingsService } from './spendings/spendings.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, SpendingsController, CategoriesController],
  providers: [AppService, CatsService, SpendingsService],
})
export class AppModule {}
