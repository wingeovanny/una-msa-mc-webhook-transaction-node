import { TransactionService } from './transaction.service';
import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SERVICE_NAME, TRANSACCTION_PTS_RESULT } from '../../constants/common';
import { Logger } from '@deuna/node-logger-lib';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(SERVICE_NAME)
@Controller('transaction')
export class TransactionController {
  constructor(
    private logger: Logger,
    private transacctionService: TransactionService,
  ) {}
  @Get()
  async getTest() {
    return 'Getting data for example';
  }

  @EventPattern(TRANSACCTION_PTS_RESULT)
  public hearLogTransaction(@Payload() data: any) {
    this.logger.log(`sending notification mail for ${data} `);
    this.transacctionService.sendNotificationTransaction(data);
    this.logger.log(`sent  notification mail for  `);
  }
}
