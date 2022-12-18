import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/infra/database/database.module';

import { SendNotification } from '@/app/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@/app/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@/app/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@/app/use-cases/get-recipient-notifications';
import { ReadNotification } from '@/app/use-cases/read-notifications';
import { UnreadNotification } from '@/app/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
