import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): Array<Object> {
    return [{name: 'one', author: 'gog'}]
  }
}
