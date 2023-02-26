import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/service-configuration';
import { LoggerModule } from '@deuna/node-logger-lib';
import { ALL_EXCEPTION_FILTERS_FOR_PROVIDER } from '@deuna/node-shared-lib';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
    }),
    LoggerModule.forRoot({ context: 'WebHook Client Service' }),
  ],
  providers: [...ALL_EXCEPTION_FILTERS_FOR_PROVIDER],
})
export class WebHookClientServiceModule {}
