import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  sendNotificationTransaction(data: any) {
    console.log('HOLAAAAAAAAAAAAAAA.... ', data);
    return { status: true, message: 'OK' };
  }
}
