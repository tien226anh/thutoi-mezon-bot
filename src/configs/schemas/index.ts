import { z } from 'zod';
import { appConfigSchema, formatApp } from './app.schema';

export const rootConfigSchema = z.object({
  ...appConfigSchema.shape,
});

export type RootEnv = z.infer<typeof rootConfigSchema>;

export const formatRootConfig = (env: RootEnv) => ({
  app: formatApp(env),
});

export type AppRootConfig = ReturnType<typeof formatRootConfig>;
