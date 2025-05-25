import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configFiles, { envSchema } from './config';
import { MezonBotModule } from './mezon-bot/mezon-bot.module';
import { MezonModule } from './mezon/mezon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configFiles,
      validationSchema: envSchema,
      validationOptions: {
        abortEarly: false,
      },
      validate: (config) => {
        const parsed = envSchema.safeParse(config);
        if (!parsed.success) {
          throw new Error(
            `Config validation error: ${JSON.stringify(parsed.error.format())}`,
          );
        }
        return parsed.data;
      },
      envFilePath: ['.env', `.env.${process.env.NODE_ENV || 'development'}`],
      // ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    MezonModule.forRootAsync({
      imports: [ConfigModule],
    }),
    MezonBotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
