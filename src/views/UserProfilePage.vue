<!-- src/views/UserProfilePage.vue -->
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>User Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label>User ID:</ion-label>
          <ion-text>{{ userProfile.id }}</ion-text>
        </ion-item>
        <ion-item>
          <ion-label>Username:</ion-label>
          <ion-text>{{ userProfile.username }}</ion-text>
        </ion-item>
        <ion-item>
          <ion-label>Email:</ion-label>
          <ion-text>{{ userProfile.email }}</ion-text>
        </ion-item>
        <ion-item>
          <ion-label>Device Tokens:</ion-label>
          <ion-text>{{ userProfile.devices.join(', ') }}</ion-text>
        </ion-item>
      </ion-list>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/user-profile">Profile</ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button router-link="/send-notification">Send Notification</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>

    <debug-code-block ref="debugCodeBlock" />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText, IonFooter, IonButtons, IonButton } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import DebugCodeBlock from '@/components/DebugCodeBlock.vue';

const userProfile = ref({
  id: '',
  username: '',
  email: '',
  devices: [],
});

const route = useRoute();
const debugCodeBlock = ref<InstanceType<typeof DebugCodeBlock> | null>(null);

const fetchUserProfile = async () => {
  try {
    const userId = route.query.user_id;
    debugCodeBlock.value?.addLog({
      action: 'Fetching user profile',
      result: `GET https://pulse.test.fgx.webally.co.za/api/user/user_details?user_id=${userId}`,
    });
    const response = await axios.get('https://pulse.test.fgx.webally.co.za/api/user/user_details', {
      params: { user_id: userId },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    debugCodeBlock.value?.addLog({
      action: 'User profile response received',
      result: JSON.stringify(response.data),
    });
    userProfile.value = response.data;
  } catch (error) {
    debugCodeBlock.value?.addLog({
      action: 'Failed to fetch user profile',
      result: JSON.stringify(error),
    });
    // Handle error, possibly redirect to login or show a message
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>