// src/services/NotificationService.ts
import axios from 'axios';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { Logger } from './logger.service';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/notification';

export class NotificationService {
  static async getDeviceToken() {
    try {
      if (Capacitor.isNativePlatform()) {
        await PushNotifications.register();
        const token = await new Promise<string>((resolve) => {
          PushNotifications.addListener('registration', (token) => {
            resolve(token.value);
          });
        });
        Logger.log('Device token obtained:', token);
        return token;
      }
      Logger.warn('Push notifications are not supported on this platform');
      return null;
    } catch (error) {
      Logger.error('Failed to get device token:', error);
      throw error;
    }
  }

  static async sendNotification(title: string, body: string, userId: number) {
    try {
      const token = localStorage.getItem('token');
      Logger.log('Sending notification with data:', { title, body, user_id: userId });
      await axios.post(
        `${API_URL}/send_notification`,
        {
          title,
          body,
          user_id: userId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Logger.log('Notification sent successfully');
    } catch (error) {
      Logger.error('Failed to send notification:', error);
      throw error;
    }
  }
}