import { Controller, Get } from '@nestjs/common';
import { AppTaskService } from './app-task.service';

@Controller()
export class AppTaskController {
  constructor(private readonly appTaskService: AppTaskService) {}

  @Get()
  getHello(): string {
    return this.appTaskService.getHello();
  }
}
