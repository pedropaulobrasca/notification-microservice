import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('Should send a notification', async () => {
    const iMNotificationsRepo = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(iMNotificationsRepo);

    const notification = new Notification({
      category: 'category',
      content: new Content('Nova solicitação de agendamento'),
      recipientId: 'recipientId',
    });

    await iMNotificationsRepo.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(iMNotificationsRepo.notifications[0].cancelledAt).toEqual(
      expect.any(Date),
    );
  });

  it('Should not send a notification if it does not exist', async () => {
    const iMNotificationsRepo = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(iMNotificationsRepo);

    await expect(
      cancelNotification.execute({ notificationId: 'asdasd' }),
    ).rejects.toThrowError(NotificationNotFound);
  });
});
