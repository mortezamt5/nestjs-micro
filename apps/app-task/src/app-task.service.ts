import { Injectable } from '@nestjs/common';

@Injectable()
export class AppTaskService {
  getHello(): string {
    return 'Hello World!';
  }
}
