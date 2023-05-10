import { Module } from '@nestjs/common';
import { AppUserController } from './app-user.controller';
import { AppUserService } from './app-user.service';

@Module({
  imports: [],
  controllers: [AppUserController],
  providers: [AppUserService],
})
export class AppUserModule {}
