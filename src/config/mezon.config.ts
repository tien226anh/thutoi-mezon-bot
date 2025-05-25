import { registerAs } from '@nestjs/config';

export default registerAs('mezon', () => {
  return {
    mezonApiKey: process.env.MEZON_API_KEY || '',
    mezonAppId: process.env.MEZON_APP_ID || '',
    mezonBotId: process.env.MEZON_BOT_ID || '',
    mezonBotToken: process.env.MEZON_BOT_TOKEN || '',
    mezonOauth2ClientId: process.env.MEZON_OAUTH2_CLIENT_ID || '',
    mezonOauth2Secret: process.env.MEZON_OAUTH2_SECRET_KEY || '',
  };
});
