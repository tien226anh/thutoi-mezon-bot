import { formatRootConfig, rootConfigSchema } from './schemas';
import { ValidatedConfigService } from './validated-config.service';

export const ValidatedConfigProvider = {
  provide: ValidatedConfigService,
  useFactory: () => {
    const parsed = rootConfigSchema.parse(process.env);
    const formatted = formatRootConfig(parsed);
    return new ValidatedConfigService(formatted);
  },
};
