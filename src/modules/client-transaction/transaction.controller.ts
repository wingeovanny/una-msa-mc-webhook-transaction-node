import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { SERVICE_NAME, TRANSACCTION_PTS_RESULT } from '../../constants/common';
import { Logger } from '@deuna/node-logger-lib';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(SERVICE_NAME)
@Controller('transaction')
export class TransactionController {
  constructor(
    @Inject('KAFKA_CLIENT')
    private readonly kafkaClient: ClientKafka,
    private logger: Logger,
  ) {}
  @Get()
  async getTest() {
    return 'Getting data for example';
  }

  @EventPattern(TRANSACCTION_PTS_RESULT)
  public hearLogTransaction(@Payload() payload: any) {
    this.logger.log(payload, Controller.name);
  }
}
