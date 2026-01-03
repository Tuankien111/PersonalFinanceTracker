import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { CatsController } from '@/cats/cats.controller';
import { CatsService } from '@/cats/cats.service';
import { SpendingsController } from './spendings/spendings.controller';
import { CategoriesController } from './categories/categories.controller';
import { SpendingsService } from './spendings/spendings.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.getTypeOrmConfig(),
    }),
  ],
  controllers: [AppController, CatsController, SpendingsController, CategoriesController],
  providers: [AppService, CatsService, SpendingsService],
})
export class AppModule {}
