import { registerAs } from '@nestjs/config';
import { appConfigSchema } from './schemas/app.schema';

export default registerAs('app', () => {
  const parsedConfig = appConfigSchema.parse(process.env);
  return {
    name: parsedConfig.APP_NAME,
    port: parsedConfig.APP_PORT,
    env: parsedConfig.NODE_ENV,
  };
});
