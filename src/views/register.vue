<!-- eslint-disable vue/multi-word-component-names -->
<!-- src/views/register.vue -->
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="ion-padding">
        <ion-item>
          <ion-label position="floating">Username</ion-label>
          <ion-input v-model="username" type="text"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Device Token</ion-label>
          <ion-input v-model="deviceToken" readonly></ion-input>
        </ion-item>
        <ion-button expand="block" @click="register">Register</ion-button>
        <ion-button fill="clear" @click="goToLogin">Already have an account? Login</ion-button>
      </div>

      <debug-code-block></debug-code-block>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { useIonRouter } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';
import { AuthService } from '@/services/auth.service';
import { Logger } from '@/services/logger.service';
import DebugCodeBlock from '@/components/DebugCodeBlock.vue';

const username = ref('');
const email = ref('');
const password = ref('');
const deviceToken = ref('');
const router = useIonRouter();

onMounted(async () => {
  Logger.log('Initializing push notifications');
  try {
    const permissionStatus = await PushNotifications.checkPermissions();
    Logger.log(`Push notification permission status: ${JSON.stringify(permissionStatus)}`);

    if (permissionStatus.receive !== 'granted') {
      Logger.log('Requesting push notification permissions');
      const { receive } = await PushNotifications.requestPermissions();
      if (receive === 'denied') {
        Logger.warn('Push notification permission denied');
        return;
      }
    }

    Logger.log('Registering for push notifications');
    await PushNotifications.register();

    Logger.log('Adding registration listener');
    PushNotifications.addListener('registration', (token) => {
      deviceToken.value = token.value;
      Logger.log(`Device token obtained: ${token.value}`);
    });

    Logger.log('Adding registration error listener');
    PushNotifications.addListener('registrationError', (error) => {
      Logger.error(`Error during push notification registration: ${JSON.stringify(error)}`);
    });
  } catch (error) {
    Logger.error(`Error initializing push notifications: ${JSON.stringify(error)}`);
  }
});

const register = async () => {
  try {
    await AuthService.register(
      username.value,
      email.value,
      password.value,
      deviceToken.value
    );
    router.push('/login');
  } catch (error) {
    Logger.error('Registration failed:', error);
  }
};

const goToLogin = () => {
  router.push('/login');
};
</script>