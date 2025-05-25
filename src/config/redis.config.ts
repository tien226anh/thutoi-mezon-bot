import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
  password: process.env.REDIS_PASSWORD || '',
  ttl: parseInt(process.env.REDIS_TTL || '3600', 10),
  // db: parseInt(process.env.REDIS_DB || '0', 10),
}));
