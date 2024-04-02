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
    </ion-content>

    <debug-code-block ref="debugCodeBlock" />
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { useIonRouter } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';
import { AuthService } from '@/services/auth.service';
import DebugCodeBlock from '@/components/DebugCodeBlock.vue';

const username = ref('');
const email = ref('');
const password = ref('');
const deviceToken = ref('');
const router = useIonRouter();
const debugCodeBlock = ref<InstanceType<typeof DebugCodeBlock> | null>(null);

onMounted(async () => {
  if ('PushNotifications' in window) {
    try {
      debugCodeBlock.value?.addLog({
        action: 'Requesting permission',
        result: 'PushNotifications.requestPermissions()',
      });
      const status = await PushNotifications.requestPermissions();
      debugCodeBlock.value?.addLog({
        action: 'Permission request result',
        result: JSON.stringify(status),
      });
      if (status.receive === 'granted') {
        debugCodeBlock.value?.addLog({
          action: 'Registering for push',
          result: 'PushNotifications.register()',
        });
        PushNotifications.register();
        debugCodeBlock.value?.addLog({
          action: 'Awaiting registration event',
          result: 'PushNotifications.addListener(\'registration\')',
        });
        PushNotifications.addListener('registration', (token) => {
          debugCodeBlock.value?.addLog({
            action: 'Registration token received',
            result: token.value,
          });
          deviceToken.value = token.value;
        });
      } else {
        debugCodeBlock.value?.addLog({
          action: 'Permission denied',
          result: 'Unable to retrieve device token',
        });
      }
    } catch (error) {
      debugCodeBlock.value?.addLog({
        action: 'Error requesting permission',
        result: JSON.stringify(error),
      });
    }
  } else {
    debugCodeBlock.value?.addLog({
      action: 'PushNotifications not available',
      result: 'Push notifications are not supported on this device',
    });
  }
});

const register = async () => {
  try {
    debugCodeBlock.value?.addLog({
      action: 'Registering user',
      result: 'Calling AuthService.register()',
    });
    await AuthService.register(username.value, email.value, password.value, deviceToken.value);
    debugCodeBlock.value?.addLog({
      action: 'Registration successful',
      result: 'Navigating to login page',
    });
    router.push('/login');
  } catch (error) {
    debugCodeBlock.value?.addLog({
      action: 'Registration failed',
      result: JSON.stringify(error),
    });
  }
};

const goToLogin = () => {
  debugCodeBlock.value?.addLog({
    action: 'Navigating to login page',
    result: 'router.push(\'/login\')',
  });
  router.push('/login');
};
</script>