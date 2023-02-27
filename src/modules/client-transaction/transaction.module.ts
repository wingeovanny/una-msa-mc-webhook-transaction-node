import { LoggerModule } from '@deuna/node-logger-lib';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { KAFKA_CLIENT_CONFIG } from '../../config/kafka';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [
    LoggerModule.forRoot({ context: 'Transaction Module' }),
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        ...KAFKA_CLIENT_CONFIG,
      },
    ]),
  ],
  controllers: [TransactionController],
  providers: [],
})
export class NotificationClientTransactionModule {}
