// src/services/auth.service.ts
import axios from 'axios';
import { Logger } from './logger.service';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/user';

export class AuthService {
  static async register(username: string, email: string, password: string, deviceToken: string) {
    try {
      Logger.log('Calling AuthService.register');
      const response = await axios.post(`${API_URL}/register`, {
        username,
        email,
        password,
        device_token: deviceToken,
      });
      Logger.log('User registered successfully:', response.data);
      return response.data;
    } catch (error) {
      Logger.error('Registration failed:', error);
      throw error;
    }
  }

  static async login(email: string, password: string) {
    try {
      Logger.log('Calling AuthService.login');
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      Logger.log('Login successful, token stored');
      return response.data;
    } catch (error) {
      Logger.error('Login failed:', error);
      throw error;
    }
  }

  static async updateDeviceToken(userId: number, deviceToken: string) {
    try {
      Logger.log('Calling AuthService.updateDeviceToken');
      const response = await axios.post(`${API_URL}/update_device_token`, {
        user_id: userId,
        device_token: deviceToken,
      });
      Logger.log('Device token updated successfully:', response.data);
      return response.data;
    } catch (error) {
      Logger.error('Failed to update device token:', error);
      throw error;
    }
  }
}