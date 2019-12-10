import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const filePath = 'dev.env';
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    dotenv.config();
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
