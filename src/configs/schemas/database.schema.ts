import { z } from 'zod';

export const databaseConfigSchema = z.object({
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.string().transform(Number).default('5432'),
  DB_USER: z.string().default('postgres'),
  DB_PASS: z.string().default('postgres'),
  DB_NAME: z.string().default('postgres'),
});

export type DatabaseEnv = z.infer<typeof databaseConfigSchema>;

export const formatDatabase = (env: DatabaseEnv) => ({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  pass: env.DB_PASS,
  name: env.DB_NAME,
});
