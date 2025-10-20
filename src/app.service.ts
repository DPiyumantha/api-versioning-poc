import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const message = `Hello, welcome to API Versioning POC!`
    Logger.log(message);
    return message;
  }
}
