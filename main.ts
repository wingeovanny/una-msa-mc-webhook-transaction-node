// call initially to setup app env vars
import { setupEnvironment } from '@deuna/node-environments-lib';
setupEnvironment();
import { AuditInterceptor, registerSwagger } from '@deuna/node-shared-lib';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@deuna/node-logger-lib';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

import { KAFKA_CLIENT_CONFIG } from './src/config/kafka';
import { SERVICE_NAME } from './src/constants/common';
import { NotificationServiceModule } from './src/notification-service.module';

const logger = new Logger({ context: 'Notification Client Service' });

async function bootstrap() {
  const app = await NestFactory.create(NotificationServiceModule);
  if (process.env.ENABLE_AUDIT === 'true') {
    app.useGlobalInterceptors(new AuditInterceptor(SERVICE_NAME));
  }
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.connectMicroservice(KAFKA_CLIENT_CONFIG);

  await app.startAllMicroservices();
  registerSwagger(app, SERVICE_NAME);

  await app.listen(process.env.SERVICE_PORT);
  logger.log(`Microservice is listening on: ${await app.getUrl()}`);
}
bootstrap();
