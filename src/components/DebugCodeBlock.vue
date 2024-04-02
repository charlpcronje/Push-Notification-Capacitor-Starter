<!-- src/components/DebugCodeBlock.vue -->
<template>
    <div class="debug-block">
      <div class="debug-header">
        <h3>Debug Logs</h3>
        <ion-button fill="clear" size="small" @click="copyLogs">Copy</ion-button>
      </div>
      <div class="debug-content" ref="debugContent">
        <p v-for="log in logs" :key="log.timestamp">{{ log.timestamp }} - {{ log.message }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { IonButton } from '@ionic/vue';
  import { logs, addLog } from '@/services/logger.service';
  import { ref } from 'vue';
  
  const debugContent = ref<HTMLElement | null>(null);
  
  const copyLogs = () => {
    if (debugContent.value) {
      const logText = logs.map(log => `${log.timestamp} - ${log.message}`).join('\n');
      navigator.clipboard.writeText(logText);
      addLog('Logs copied to clipboard');
    }
  };
  </script>
  
  <style scoped>
  .debug-block {
    margin-top: 20px;
    padding: 10px;
    background-color: #1b0404;
    border-radius: 4px;
  }
  
  .debug-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .debug-content {
    max-height: 200px;
    overflow-y: auto;
    padding: 5px;
    background-color: #1b0404;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>