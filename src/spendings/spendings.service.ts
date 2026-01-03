import { Injectable } from '@nestjs/common';

@Injectable()
export class SpendingsService {
    show(): string {
        return('This show all spending on monthly');
    }
}
