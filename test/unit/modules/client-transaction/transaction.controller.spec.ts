import { Test, TestingModule } from '@nestjs/testing';
import { NotificationClientTransactionController } from '../../../../src/modules/client-transaction/transaction.controller';

describe('NotificationClientTransactionController', () => {
  let controller: NotificationClientTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationClientTransactionController],
    }).compile();

    controller = module.get<NotificationClientTransactionController>(
      NotificationClientTransactionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
