import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ValidatedConfigProvider } from './configs/config.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidatedConfigService } from './configs/validated-config.service';
import { AppRootConfig } from './configs/schemas';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ValidatedConfigService],
      useFactory: (config: ValidatedConfigService<AppRootConfig>) => {
        const databaseConfig = config.get('database');
        return {
          type: "postgres",
          host: databaseConfig.host,
          port: databaseConfig.port,
          username: databaseConfig.user,
          password: databaseConfig.pass,
          name: databaseConfig.name,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ValidatedConfigProvider],
  exports: [ValidatedConfigProvider],
})
export class AppModule { }
