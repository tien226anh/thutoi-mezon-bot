import { z } from 'zod';
import { appConfigSchema, formatApp } from './app.schema';
import { databaseConfigSchema, formatDatabase } from './database.schema';

export const rootConfigSchema = z.object({
  ...appConfigSchema.shape,
  ...databaseConfigSchema.shape,
});

export type RootEnv = z.infer<typeof rootConfigSchema>;

export const formatRootConfig = (env: RootEnv) => ({
  app: formatApp(env),
  database: formatDatabase(env),
});

export type AppRootConfig = ReturnType<typeof formatRootConfig>;
