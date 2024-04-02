<!-- src/components/DebugCodeBlock.vue -->
<template>
    <div class="debug-code-block">
      <button class="copy-button" @click="copyLogs">Copy</button>
      <pre ref="codeBlock" class="code-block" v-html="formattedLogs"></pre>
    </div>
    <p class="note">
      Available methods to log:
      - addLog(log: { action: string; result: string }): Adds a log entry to the code block.
      - clearLogs(): Clears all the logs in the code block.
    </p>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  interface Log {
    timestamp: string;
    action: string;
    result: string;
  }
  
  const logs = ref<Log[]>([]);
  const codeBlock = ref<HTMLElement | null>(null);
  
  const formattedLogs = computed(() => {
    return logs.value
      .map(
        (log) =>
          `<span class="timestamp">${log.timestamp}</span> - <span class="action">${log.action}</span> >> <span class="result">${log.result}</span>`
      )
      .join('\n');
  });
  
  const addLog = (log: { action: string; result: string }) => {
    logs.value.push({
      timestamp: new Date().toISOString(),
      ...log,
    });
  };
  
  const clearLogs = () => {
    logs.value = [];
  };
  
  const copyLogs = () => {
    if (codeBlock.value) {
      const range = document.createRange();
      range.selectNode(codeBlock.value);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
    }
  };
  
  defineExpose({
    addLog,
    clearLogs,
  });
  </script>
  
  <style scoped>
  .debug-code-block {
    position: relative;
    max-height: 200px;
    overflow-y: auto;
    background-color: #2c0a0a;
    padding: 10px;
    margin-top: 20px;
  }
  
  .copy-button {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .code-block {
    white-space: pre-wrap;
    font-family: monospace;
    font-size: 14px;
  }
  
  .timestamp {
    font-weight: bold;
  }
  
  .action {
    font-style: normal;
  }
  
  .result {
    font-style: italic;
  }
  
  .note {
    margin-top: 10px;
    font-size: 12px;
    color: #888;
  }
  </style>