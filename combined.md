## Analysis Report

| No. | File | Lines | Words | AI Tokens |
| --- | ---- | ----- | ----- | --------- |
| 1 | ./.eslintrc.cjs | 21 | 45 | 89 |
| 2 | ./capacitor.config.ts | 19 | 39 | 71 |
| 3 | ./cypress.config.ts | 16 | 36 | 92 |
| 4 | ./index.html | 32 | 70 | 198 |
| 5 | ./ionic.config.json | 8 | 14 | 39 |
| 6 | ./package.json | 48 | 97 | 357 |
| 7 | ./tsconfig.json | 22 | 45 | 172 |
| 8 | ./tsconfig.node.json | 10 | 15 | 45 |
| 9 | ./vite.config.ts | 19 | 38 | 65 |
| 10 | ./src/App.vue | 10 | 17 | 39 |
| 11 | ./src/main.ts | 41 | 110 | 206 |
| 12 | ./src/vite-env.d.ts | 2 | 4 | 9 |
| 13 | ./src/components/ExploreContainer.vue | 40 | 67 | 162 |
| 14 | ./src/router/index.ts | 36 | 81 | 146 |
| 15 | ./src/views/Tab1Page.vue | 24 | 44 | 118 |
| 16 | ./src/views/Tab2Page.vue | 24 | 44 | 118 |
| 17 | ./src/views/Tab3Page.vue | 24 | 44 | 118 |
| 18 | ./src/views/TabsPage.vue | 29 | 64 | 184 |
| 19 | ./src/views/register.vue | 80 | 206 | 481 |
| 20 | ./src/views/login.vue | 92 | 198 | 403 |
| 21 | ./src/views/UserProfilePage.vue | 74 | 173 | 415 |
| 22 | ./src/views/SendNotificationPage.vue | 51 | 138 | 327 |
| 23 | ./src/services/auth.service.ts | 28 | 79 | 151 |
| 24 | ./src/services/NotificationService.ts | 31 | 80 | 160 |
| 25 | ./android/build.gradle | 30 | 65 | 87 |
| 26 | ./android/settings.gradle | 5 | 11 | 28 |
| 27 | ./android/variables.gradle | 16 | 45 | 55 |
| 28 | ./android/capacitor.settings.gradle | 19 | 51 | 156 |
| 29 | ./android/app/build.gradle | 55 | 125 | 264 |
| 30 | ./android/app/proguard-rules.pro | 22 | 101 | 118 |
| 31 | ./android/app/capacitor.build.gradle | 24 | 46 | 91 |
| 32 | ./android/app/google-services.json | 29 | 45 | 119 |
| 33 | ./android/app/src/main/assets/capacitor.config.json | 18 | 26 | 70 |
| 34 | ./android/app/src/main/assets/capacitor.plugins.json | 23 | 32 | 96 |
| 35 | ./android/app/src/main/assets/public/index.html | 38 | 112 | 514 |
|  | Total | 1060 | 2407 | 5763 |


## Total Counts Across All Files. Tokenizer Used: NLTK's Punkt Tokenizer
- Total Lines: 1060
- Total Words: 2407
- Total AI Tokens: 5763

## File: .eslintrc.cjs
```cjs
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}

```

## File: capacitor.config.ts
```ts
// capacitor.config.ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Push Test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};

export default config;

```

## File: cypress.config.ts
```ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'tests/e2e/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
    baseUrl: 'http://localhost:5173',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Ionic App</title>

    <base href="/" />

    <meta name="color-scheme" content="light dark" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />

    <link rel="shortcut icon" type="image/png" href="/favicon.png" />

    <!-- add to homescreen for ios -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Ionic App" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </head>

  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>

</html>


```

## File: ionic.config.json
```json
{
  "name": "Push Test",
  "integrations": {
    "capacitor": {}
  },
  "type": "vue-vite",
  "id": "0763f359"
}
```

## File: package.json
```json
{
  "name": "push-test",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "test:e2e": "cypress run",
    "test:unit": "vitest",
    "lint": "eslint ."
  },
  "dependencies": {
    "@capacitor/android": "5.7.4",
    "@capacitor/app": "5.0.7",
    "@capacitor/core": "5.7.4",
    "@capacitor/haptics": "5.0.7",
    "@capacitor/keyboard": "5.0.8",
    "@capacitor/push-notifications": "^5.1.1",
    "@capacitor/status-bar": "5.0.7",
    "@ionic/vue": "^7.0.0",
    "@ionic/vue-router": "^7.0.0",
    "axios": "^1.6.8",
    "ionicons": "^7.0.0",
    "vue": "^3.3.0",
    "vue-router": "^4.2.0"
  },
  "devDependencies": {
    "@capacitor/cli": "5.7.4",
    "@vitejs/plugin-legacy": "^5.0.0",
    "@vitejs/plugin-vue": "^4.0.0",
    "@vue/babel-plugin-jsx": "^1.2.2",
    "@vue/eslint-config-typescript": "^12.0.0",
    "@vue/test-utils": "^2.3.0",
    "cypress": "^13.5.0",
    "eslint": "^8.35.0",
    "eslint-plugin-vue": "^9.9.0",
    "jsdom": "^22.1.0",
    "terser": "^5.4.0",
    "typescript": "^5.1.6",
    "vite": "^5.0.0",
    "vitest": "^0.34.6",
    "vue-tsc": "^1.0.24"
  },
  "description": "An Ionic project"
}

```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

```

## File: vite.config.ts
```ts
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})


```

## File: src/App.vue
```vue
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

```

## File: src/main.ts
```ts
// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const initializePushNotifications = async () => {
  if (Capacitor.isNativePlatform()) {
    // ...
  }
};

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
  initializePushNotifications();
});
```

## File: src/vite-env.d.ts
```ts
/// <reference types="vite/client" />

```

## File: src/components/ExploreContainer.vue
```vue
<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

```

## File: src/router/index.ts
```ts
// src/router/index.ts
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import RegisterPage from '@/views/register.vue';
import LoginPage from '@/views/login.vue';
import UserProfilePage from '@/views/UserProfilePage.vue';
import SendNotificationPage from '@/views/SendNotificationPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/user-profile',
    component: UserProfilePage,
    props: route => ({ userId: route.query.user_id }),
  },
  {
    path: '/send-notification',
    component: SendNotificationPage,
    name: 'SendNotification',
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

```

## File: src/views/Tab1Page.vue
```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

```

## File: src/views/Tab2Page.vue
```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

```

## File: src/views/Tab3Page.vue
```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

```

## File: src/views/TabsPage.vue
```vue
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>

```

## File: src/views/register.vue
```vue
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
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { useIonRouter } from '@ionic/vue';
import { PushNotifications } from '@capacitor/push-notifications';
import { AuthService } from '@/services/auth.service';

const username = ref('');
const email = ref('');
const password = ref('');
const deviceToken = ref('');
const router = useIonRouter();

onMounted(async () => {
  if ('PushNotifications' in window) {
    const status = await PushNotifications.requestPermissions();
    if (status.receive === 'granted') {
      PushNotifications.register();
      PushNotifications.addListener('registration',
        (token) => {
          deviceToken.value = token.value;
        }
      );
    }
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
    // Navigate to another route upon successful registration, for example, to the login page
    router.push('/login');
    console.log('Registration successful');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};


const goToLogin = () => {
  router.push('/login'); // Adjust according to your app's routing
};
</script>
```

## File: src/views/login.vue
```vue
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
```

## File: src/views/UserProfilePage.vue
```vue
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

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText, IonFooter, IonButtons, IonButton } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

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
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    // Handle error, possibly redirect to login or show a message
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>
```

## File: src/views/SendNotificationPage.vue
```vue
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
  </ion-page>
</template>

<script setup>
    import { ref } from 'vue';
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
    import { NotificationService } from '@/services/NotificationService';

    const userId = ref('');
    const title = ref('');
    const body = ref('');

    const sendNotification = async () => {
    if (title.value && body.value && userId.value) {
        try {
          await NotificationService.sendNotification(title.value, body.value, Number(userId.value));
          alert('Notification sent successfully.');
          // Reset form
          title.value = '';
          body.value = '';
          userId.value = '';
        } catch (error) {
          alert(`Failed to send notification: ${error}`);
        }
    } else {
        alert('Please fill in all fields.');
    }
    };
</script>
```

## File: src/services/auth.service.ts
```ts
import axios from 'axios';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/user';

export class AuthService {
    static async register(username: string, email: string, password: string, deviceToken: string) {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            email,
            password,
            device_token: deviceToken
        });
        return response.data;
    }

    static async login(email: string, password: string) {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    }

    static async updateDeviceToken(userId: number, deviceToken: string) {
        const response = await axios.post(`${API_URL}/update_device_token`, {
            user_id: userId,
            device_token: deviceToken
        });
        return response.data;
    }
}
```

## File: src/services/NotificationService.ts
```ts
import axios from 'axios';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

const API_URL = 'https://pulse.test.fgx.webally.co.za/api/notification';

export class NotificationService {
    static async getDeviceToken() {
        if (Capacitor.isNativePlatform()) {
            await PushNotifications.register();
            return new Promise((resolve) => {
                PushNotifications.addListener('registration', (token) => {
                    resolve(token.value);
                });
            });
        }
        return null;
    }

    static async sendNotification(title: string, body: string, userId: number) {
        const token = localStorage.getItem('token');

        await axios.post(`${API_URL}/send_notification`, {
            title,
            body,
            user_id: userId
        }, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }
}
```

## File: android/build.gradle
```gradle
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.0.0'
        classpath 'com.google.gms:google-services:4.3.15'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

apply from: "variables.gradle"

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}

```

## File: android/settings.gradle
```gradle
include ':app'
include ':capacitor-cordova-android-plugins'
project(':capacitor-cordova-android-plugins').projectDir = new File('./capacitor-cordova-android-plugins/')

apply from: 'capacitor.settings.gradle'
```

## File: android/variables.gradle
```gradle
ext {
    minSdkVersion = 22
    compileSdkVersion = 33
    targetSdkVersion = 33
    androidxActivityVersion = '1.7.0'
    androidxAppCompatVersion = '1.6.1'
    androidxCoordinatorLayoutVersion = '1.2.0'
    androidxCoreVersion = '1.10.0'
    androidxFragmentVersion = '1.5.6'
    coreSplashScreenVersion = '1.0.0'
    androidxWebkitVersion = '1.6.1'
    junitVersion = '4.13.2'
    androidxJunitVersion = '1.1.5'
    androidxEspressoCoreVersion = '3.5.1'
    cordovaAndroidVersion = '10.1.1'
}
```

## File: android/capacitor.settings.gradle
```gradle
// DO NOT EDIT THIS FILE! IT IS GENERATED EACH TIME "capacitor update" IS RUN
include ':capacitor-android'
project(':capacitor-android').projectDir = new File('../node_modules/@capacitor/android/capacitor')

include ':capacitor-app'
project(':capacitor-app').projectDir = new File('../node_modules/@capacitor/app/android')

include ':capacitor-haptics'
project(':capacitor-haptics').projectDir = new File('../node_modules/@capacitor/haptics/android')

include ':capacitor-keyboard'
project(':capacitor-keyboard').projectDir = new File('../node_modules/@capacitor/keyboard/android')

include ':capacitor-push-notifications'
project(':capacitor-push-notifications').projectDir = new File('../node_modules/@capacitor/push-notifications/android')

include ':capacitor-status-bar'
project(':capacitor-status-bar').projectDir = new File('../node_modules/@capacitor/status-bar/android')

```

## File: android/app/build.gradle
```gradle
apply plugin: 'com.android.application'

android {
    namespace "io.ionic.starter"
    compileSdkVersion rootProject.ext.compileSdkVersion
    defaultConfig {
        applicationId "io.ionic.starter"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
        aaptOptions {
             // Files and dirs to omit from the packaged assets dir, modified to accommodate modern web apps.
             // Default: https://android.googlesource.com/platform/frameworks/base/+/282e181b58cf72b6ca770dc7ca5f91f135444502/tools/aapt/AaptAssets.cpp#61
            ignoreAssetsPattern '!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~'
        }
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

repositories {
    flatDir{
        dirs '../capacitor-cordova-android-plugins/src/main/libs', 'libs'
    }
}

dependencies {
    implementation fileTree(include: ['*.jar'], dir: 'libs')
    implementation "androidx.appcompat:appcompat:$androidxAppCompatVersion"
    implementation "androidx.coordinatorlayout:coordinatorlayout:$androidxCoordinatorLayoutVersion"
    implementation "androidx.core:core-splashscreen:$coreSplashScreenVersion"
    implementation project(':capacitor-android')
    testImplementation "junit:junit:$junitVersion"
    androidTestImplementation "androidx.test.ext:junit:$androidxJunitVersion"
    androidTestImplementation "androidx.test.espresso:espresso-core:$androidxEspressoCoreVersion"
    implementation project(':capacitor-cordova-android-plugins')
}

apply from: 'capacitor.build.gradle'

try {
    def servicesJSON = file('google-services.json')
    if (servicesJSON.text) {
        apply plugin: 'com.google.gms.google-services'
    }
} catch(Exception e) {
    logger.info("google-services.json not found, google-services plugin not applied. Push Notifications won't work")
}

```

## File: android/app/proguard-rules.pro
```pro
# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

```

## File: android/app/capacitor.build.gradle
```gradle
// DO NOT EDIT THIS FILE! IT IS GENERATED EACH TIME "capacitor update" IS RUN

android {
  compileOptions {
      sourceCompatibility JavaVersion.VERSION_17
      targetCompatibility JavaVersion.VERSION_17
  }
}

apply from: "../capacitor-cordova-android-plugins/cordova.variables.gradle"
dependencies {
    implementation project(':capacitor-app')
    implementation project(':capacitor-haptics')
    implementation project(':capacitor-keyboard')
    implementation project(':capacitor-push-notifications')
    implementation project(':capacitor-status-bar')

}


if (hasProperty('postBuildExtras')) {
  postBuildExtras()
}

```

## File: android/app/google-services.json
```json
{
    "project_info": {
      "project_number": "142545144772",
      "project_id": "pulse-test-b6d4f",
      "storage_bucket": "pulse-test-b6d4f.appspot.com"
    },
    "client": [
      {
        "client_info": {
          "mobilesdk_app_id": "1:142545144772:android:6c280d03dc50c78b063291",
          "android_client_info": {
            "package_name": "com.fgx.pulsetest"
          }
        },
        "oauth_client": [],
        "api_key": [
          {
            "current_key": "AIzaSyC8OgkxXLQhXPvH3kzv4L4k42fzAk-kGXY"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": []
          }
        }
      }
    ],
    "configuration_version": "1"
  }
```

## File: android/app/src/main/assets/capacitor.config.json
```json
{
	"appId": "io.ionic.starter",
	"appName": "Push Test",
	"webDir": "dist",
	"server": {
		"androidScheme": "https"
	},
	"plugins": {
		"PushNotifications": {
			"presentationOptions": [
				"badge",
				"sound",
				"alert"
			]
		}
	}
}

```

## File: android/app/src/main/assets/capacitor.plugins.json
```json
[
	{
		"pkg": "@capacitor/app",
		"classpath": "com.capacitorjs.plugins.app.AppPlugin"
	},
	{
		"pkg": "@capacitor/haptics",
		"classpath": "com.capacitorjs.plugins.haptics.HapticsPlugin"
	},
	{
		"pkg": "@capacitor/keyboard",
		"classpath": "com.capacitorjs.plugins.keyboard.KeyboardPlugin"
	},
	{
		"pkg": "@capacitor/push-notifications",
		"classpath": "com.capacitorjs.plugins.pushnotifications.PushNotificationsPlugin"
	},
	{
		"pkg": "@capacitor/status-bar",
		"classpath": "com.capacitorjs.plugins.statusbar.StatusBarPlugin"
	}
]

```

## File: android/app/src/main/assets/public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Ionic App</title>

    <base href="/" />

    <meta name="color-scheme" content="light dark" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />

    <link rel="shortcut icon" type="image/png" href="/favicon.png" />

    <!-- add to homescreen for ios -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Ionic App" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <script type="module" crossorigin src="/assets/index-Wrf8oYHH.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-udaUbzQG.css">
    <script type="module">import.meta.url;import("_").catch(()=>1);(async function*(){})().next();if(location.protocol!="file:"){window.__vite_is_modern_browser=true}</script>
    <script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>
  </head>

  <body>
    <div id="app"></div>
    <script nomodule>!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script>
    <script nomodule crossorigin id="vite-legacy-polyfill" src="/assets/polyfills-legacy-DU1UhL-1.js"></script>
    <script nomodule crossorigin id="vite-legacy-entry" data-src="/assets/index-legacy-Bf6H8CKZ.js">System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))</script>
  </body>

</html>


```



<p id="hidden_comment">
    This is a hidden comment. It explains that the following style tag is meant to 
    style HTML content if this Markdown is converted to HTML. This comment should 
    not be visible in most Markdown renderers.
</p>
<style>
    #hidden_comment {
        display: none;
    }
    table {
        width: 100%;
    }
    table tr:first-child {
        font-weight: bold;
    }
    table tr:last-child {
        font-style: italic;
    }
</style>
