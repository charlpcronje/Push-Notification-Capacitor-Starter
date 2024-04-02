<!-- src/views/SendNotificationPage.vue -->
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Send Notification</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">User ID</ion-label>
        <ion-input type="number" v-model="userId" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="title" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Body</ion-label>
        <ion-textarea v-model="body" required></ion-textarea>
      </ion-item>
      <ion-button expand="block" @click="sendNotification">Send Notification</ion-button>
    </ion-content>

    <debug-code-block ref="debugCodeBlock" />
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
import { NotificationService } from '@/services/NotificationService';
import DebugCodeBlock from '@/components/DebugCodeBlock.vue';

const userId = ref('');
const title = ref('');
const body = ref('');
const debugCodeBlock = ref<InstanceType<typeof DebugCodeBlock> | null>(null);

const sendNotification = async () => {
  if (title.value && body.value && userId.value) {
    try {
      debugCodeBlock.value?.addLog({
        action: 'Sending notification',
        result: 'Calling NotificationService.sendNotification()',
      });
      await NotificationService.sendNotification(title.value, body.value, Number(userId.value));
      debugCodeBlock.value?.addLog({
        action: 'Notification sent successfully',
        result: 'alert(\'Notification sent successfully.\')',
      });
      alert('Notification sent successfully.');
      // Reset form
      title.value = '';
      body.value = '';
      userId.value = '';
    } catch (error) {
      debugCodeBlock.value?.addLog({
        action: 'Failed to send notification',
        result: JSON.stringify(error),
      });
      alert(`Failed to send notification: ${error}`);
    }
  } else {
    debugCodeBlock.value?.addLog({
      action: 'Invalid form data',
      result: 'alert(\'Please fill in all fields.\')',
    });
    alert('Please fill in all fields.');
  }
};
</script>