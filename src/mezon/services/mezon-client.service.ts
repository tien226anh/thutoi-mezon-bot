import { Injectable, Logger } from '@nestjs/common';
import { MezonClient } from 'mezon-sdk';

@Injectable()
export class MezonClientService {
  private readonly logger = new Logger(MezonClientService.name);
  private mezonClient: MezonClient;
  constructor(private readonly mezonToken: string) {
    this.logger.log(`MezonClientService initialized with token: ${mezonToken}`);
    this.mezonClient = new MezonClient(mezonToken);
  }

  async startMezon() {
    try {
      const result = await this.mezonClient.login();
      this.logger.log(`Mezon client started successfully: ${result}`);
    } catch (error) {
      this.logger.error(
        `Error starting mezon client: ${error}, typeof error: ${typeof error}`,
      );
      throw error;
    }
  }
}
