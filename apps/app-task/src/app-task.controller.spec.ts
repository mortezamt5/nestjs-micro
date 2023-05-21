import { Test, TestingModule } from '@nestjs/testing';
import { AppTaskController } from './app-task.controller';
import { AppTaskService } from './app-task.service';

describe('AppTaskController', () => {
  let appTaskController: AppTaskController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppTaskController],
      providers: [AppTaskService],
    }).compile();

    appTaskController = app.get<AppTaskController>(AppTaskController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appTaskController.getHello()).toBe('Hello World!');
    });
  });
});
