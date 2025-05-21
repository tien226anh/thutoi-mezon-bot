import { registerAs } from '@nestjs/config';
import { databaseConfigSchema } from './schemas/database.schema';

export default registerAs('database', () => {
  const parsedConfig = databaseConfigSchema.parse(process.env);
  return {
    host: parsedConfig.DB_HOST,
    port: parsedConfig.DB_PORT,
    user: parsedConfig.DB_USER,
    pass: parsedConfig.DB_PASS,
    name: parsedConfig.DB_NAME,
  };
});
