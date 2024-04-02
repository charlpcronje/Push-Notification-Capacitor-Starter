<!-- eslint-disable vue/multi-word-component-names -->
<!-- src/views/login.vue -->
<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <debug-code-block ref="debugCodeBlock" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '@/services/auth.service';
import DebugCodeBlock from '@/components/DebugCodeBlock.vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const debugCodeBlock = ref<InstanceType<typeof DebugCodeBlock> | null>(null);

const login = async () => {
  try {
    debugCodeBlock.value?.addLog({
      action: 'Logging in user',
      result: 'Calling AuthService.login()',
    });
    const response = await AuthService.login(email.value, password.value);
    debugCodeBlock.value?.addLog({
      action: 'Login response received',
      result: JSON.stringify(response),
    });

    if (response.token) {
      const token = response.token;
      debugCodeBlock.value?.addLog({
        action: 'Storing token',
        result: 'localStorage.setItem(\'token\', token)',
      });
      localStorage.setItem('token', token);

      debugCodeBlock.value?.addLog({
        action: 'Redirecting to user profile',
        result: 'router.push(\'/user-profile\')',
      });
      router.push('/user-profile');
    }
  } catch (error: any) {
    debugCodeBlock.value?.addLog({
      action: 'Login error',
      result: JSON.stringify(error),
    });
    if (error.response && error.response.status === 401) {
      errorMessage.value = 'Invalid credentials';
    } else {
      errorMessage.value = 'An error occurred during login';
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>