import { DynamicModule, Global, Module } from '@nestjs/common';
import { MezonAsyncOptionsDto } from './dto/mezon-async-options.dto';
import { MezonClientService } from './services/mezon-client.service';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({})
export class MezonModule {
  static forRootAsync(options: MezonAsyncOptionsDto): DynamicModule {
    return {
      module: MezonModule,
      imports: options.imports,
      providers: [
        {
          provide: MezonClientService,
          useFactory: async (configService: ConfigService) => {
            const mezonToken = configService.get<string>('MEZON_BOT_TOKEN');
            if (!mezonToken) return null;

            const client = new MezonClientService(mezonToken);

            await client.startMezon();

            return client;
          },
          inject: [ConfigService],
        },
      ],
      exports: [MezonClientService],
    };
  }
}
