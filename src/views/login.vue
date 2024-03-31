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
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { AuthService } from '@/services/auth.service';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login(this.email, this.password);

        if (response.token) {
          const token = response.token;
          // Store the token in local storage or Vuex store for future use
          localStorage.setItem('token', token);

          // Redirect to the desired page after successful login
          this.$router.push('/user-profile');
        }
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          this.errorMessage = 'Invalid credentials';
        } else {
          this.errorMessage = 'An error occurred during login';
        }
      }
    },
  },
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