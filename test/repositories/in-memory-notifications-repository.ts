import { Notification } from '@/app/entities/notification';
import { NotificationsRepository } from '@/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (notification) => notification.id === notification.id,
    );

    if (notificationIndex === -1) {
      return;
    }

    this.notifications[notificationIndex] = notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
