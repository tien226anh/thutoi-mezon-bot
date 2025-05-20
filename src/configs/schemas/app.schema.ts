import { z } from 'zod';

export const appConfigSchema = z.object({
  APP_NAME: z.string().default('thutoi-mezon-bot'),
  APP_PORT: z.string().transform(Number).default('8080'),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
});

export type AppEnv = z.infer<typeof appConfigSchema>;

export const formatApp = (env: AppEnv) => ({
  name: env.APP_NAME,
  port: env.APP_PORT,
  env: env.NODE_ENV,
});
