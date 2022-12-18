import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should send a notification', async () => {
    const iMNotificationsRepo = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(iMNotificationsRepo);

    const { notification } = await sendNotification.execute({
      recipientId: '123',
      content: 'Hello world',
      category: 'welcome',
    });

    expect(notification).toBeTruthy();
    expect(iMNotificationsRepo.notifications).toContain(notification);
  });
});
