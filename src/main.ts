import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  logger.log(`App is running on port ${process.env.PORT ?? 3000}`);
}
bootstrap()
  .then(
    () => logger.log(`Nest application started successfully`),
    (error) => logger.error('Error starting Nest application', error),
  )
  .catch((error) => {
    logger.log(`typeof error: ${typeof error}`);
    logger.error('Unhandled error during bootstrap', error);
    process.exit(1);
  });
