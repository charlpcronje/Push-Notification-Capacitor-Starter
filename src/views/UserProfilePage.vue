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
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText, IonFooter, IonButtons, IonButton } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { Logger } from '@/services/logger.service';

const userProfile = ref({
  id: '',
  username: '',
  email: '',
  devices: [],
});

const route = useRoute();

const fetchUserProfile = async () => {
  try {
    const userId = route.query.user_id;
    const response = await axios.get('https://pulse.test.fgx.webally.co.za/api/user/user_details', {
      params: { user_id: userId },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    userProfile.value = response.data;
    Logger.log('User profile fetched successfully:', response.data);
  } catch (error) {
    Logger.error('Failed to fetch user profile:', error);
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>