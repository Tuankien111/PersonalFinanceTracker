import { Controller, Get } from '@nestjs/common';
import { CatsService } from '@/cats/cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    @Get() 
    findAll(): string {
        return 'This action to find all cats';
    }

    @Get('breed')
    animalBreed():string {
        return "Meow Meow";
    }
}
