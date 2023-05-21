import { ConsoleLogger } from '@nestjs/common';

export class AppLogger extends ConsoleLogger {
  error(message: any, stack?: string, context?: string) {
    super.error(message, stack, context);
  }
}
