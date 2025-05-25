import { z } from 'zod';

export const envSchema = z.object({
  // General config
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.preprocess(
    (val: unknown) => parseInt(z.string().parse(val), 10),
    z.number().int().positive().default(3000),
  ),
  APP_NAME: z.string().min(1).default('thutoi-mezon-bot'),

  // Database config
  DB_TYPE: z.enum(['postgres', 'mysql']).default('postgres'),
  DB_HOST: z.string().min(1).default('localhost'),
  DB_PORT: z.preprocess(
    (val: unknown) => parseInt(z.string().parse(val), 10),
    z.number().int().positive().default(5432),
  ),
  DB_USERNAME: z.string().min(1).default('postgres'),
  DB_PASSWORD: z.string().min(1).default('postgres'),
  DB_LOGGING: z.preprocess(
    (val: unknown) =>
      val === 'true' ? true : val === 'false' ? false : undefined,
    z.boolean().default(false),
  ),

  // Redis config
  REDIS_HOST: z.string().min(1).default('localhost'),
  REDIS_PORT: z.preprocess(
    (val: unknown) => parseInt(z.string().parse(val), 10),
    z.number().int().positive().default(6379),
  ),
  REDIS_PASSWORD: z.string().default(''),
  REDIS_TTL: z.preprocess(
    (val: unknown) => parseInt(z.string().parse(val), 10),
    z.number().int().positive().default(3600),
  ),

  // Mezon bot config
  MEZON_API_KEY: z.string().default(''),
  MEZON_APP_ID: z.string().default(''),
  MEZON_BOT_ID: z.string().default(''),
  MEZON_BOT_TOKEN: z.string().default(''),
  MEZON_OAUTH2_CLIENT_ID: z.string().default(''),
  MEZON_OAUTH2_SECRET_KEY: z.string().default(''),
});

export type EnvSchema = z.infer<typeof envSchema>;
