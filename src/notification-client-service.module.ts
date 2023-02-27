import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/service-configuration';
import { LoggerModule } from '@deuna/node-logger-lib';
import { ALL_EXCEPTION_FILTERS_FOR_PROVIDER } from '@deuna/node-shared-lib';
import { MetaServiceModule } from './modules/meta-service/meta-service.module';
import { NotificationClientTransactionModule } from './modules/client-transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
    }),
    MetaServiceModule,
    NotificationClientTransactionModule,
    LoggerModule.forRoot({ context: 'Notification Client Service' }),
  ],
  providers: [...ALL_EXCEPTION_FILTERS_FOR_PROVIDER],
})
export class NotificationClientServiceModule {}
