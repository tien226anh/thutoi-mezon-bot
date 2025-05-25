import { ModuleMetadata } from '@nestjs/common';
import { MezonClient } from 'mezon-sdk';
export type SetupClientFactory = (client: MezonClient) => Promise<void>;
export interface MezonAsyncOptionsDto extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => Promise<any>;
  inject?: any[];
}
