// src/services/auth.service.ts
import axios from 'axios';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/user';

export class AuthService {
    static async register(username: string, email: string, password: string, deviceToken: string) {
        try {
            const response = await axios.post(`${API_URL}/register`, {
                username,
                email,
                password,
                device_token: deviceToken
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async login(email: string, password: string) {
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async updateDeviceToken(userId: number, deviceToken: string) {
        try {
            const response = await axios.post(`${API_URL}/update_device_token`, {
                user_id: userId,
                device_token: deviceToken
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}