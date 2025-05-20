import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidatedConfigService<T> {
  constructor(private readonly validateConfig: T) { }

  get<K extends keyof T>(key: K): T[K] {
    return this.validateConfig[key];
  }

  getAll(): T {
    return this.validateConfig;
  }
}
