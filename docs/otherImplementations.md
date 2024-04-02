# Other Implementations

- [Other Implementations](#other-implementations)
- [Push Notification Test App](#push-notification-test-app)
  - [Capacitor](#capacitor)
    - [Setup](#setup)
    - [Build and Run](#build-and-run)
    - [Release Build](#release-build)
  - [Cordova](#cordova)
    - [Setup](#setup-1)
    - [Build and Run](#build-and-run-1)
    - [Release Build](#release-build-1)
  - [React Native](#react-native)
    - [Setup](#setup-2)
    - [Build and Run](#build-and-run-2)
    - [Release Build](#release-build-2)


1. Creating the Capacitor version of the app:

1.1. Files created:
   - `capacitor.config.ts`: Configuration file for Capacitor, specifying app settings and plugins.
   - `android/app/google-services.json`: Google Services configuration file for Android, required for Push Notifications.
   - `android/app/src/main/AndroidManifest.xml`: Android manifest file, updated with necessary permissions and configurations.
   - `android/app/src/main/java/com/fgx/pulsetest/MainActivity.java`: Main activity file for the Android app.
   - `src/services/auth.service.ts`: Service file for handling user authentication.
   - `src/services/notification.service.ts`: Service file for handling push notifications.
   - `src/views/register.vue`: View component for user registration.
   - `src/views/login.vue`: View component for user login.
   - `src/views/UserProfilePage.vue`: View component for displaying user profile information.
   - `src/views/SendNotificationPage.vue`: View component for sending push notifications.

1.2. Files updated:
   - `package.json`: Updated with necessary dependencies for Capacitor and Push Notifications.
   - `src/router/index.ts`: Updated with routes for the new view components.
   - `src/main.ts`: Updated to initialize Push Notifications and mount the app.
   - `android/app/build.gradle`: Updated with Capacitor and Push Notifications configurations.
   - `android/build.gradle`: Updated with necessary plugins and dependencies.
   - `android/capacitor.settings.gradle`: Updated with Capacitor plugin settings.
   - `capacitor.config.json`: Updated with app configuration for Capacitor.

1.3. Issues encountered and resolved:
   - Incorrect package name in `google-services.json`, `capacitor.config.ts`, and `AndroidManifest.xml`. Resolved by updating the package name to match across all files.
   - Blank page issue due to missing route configuration. Resolved by adding a root route that redirects to the registration page.
   - Unused `PushNotifications` import in `main.ts`. Resolved by removing the unused import.

2. Replicating the app with Cordova:

2.1. Files to be created:
   - `config.xml`: Cordova configuration file specifying app settings and plugins.
   - `www/index.html`: Main HTML file for the Cordova app.
   - `www/js/index.js`: Main JavaScript file for the Cordova app.
   - `www/css/index.css`: Main CSS file for the Cordova app.
   - `www/views/register.html`: HTML file for the user registration view.
   - `www/views/login.html`: HTML file for the user login view.
   - `www/views/user-profile.html`: HTML file for the user profile view.
   - `www/views/send-notification.html`: HTML file for the send notification view.
   - `www/js/services/auth.service.js`: JavaScript file for the authentication service.
   - `www/js/services/notification.service.js`: JavaScript file for the notification service.

2.2. Files to be updated:
   - `package.json`: Update with necessary dependencies for Cordova and Push Notifications.
   - `config.xml`: Update with app configuration and plugin settings.
   - `www/js/index.js`: Update to initialize the app and handle routing.
   - `www/index.html`: Update to include necessary scripts and styles.

3. Replicating the app with React Native:

3.1. Files to be created:
   - `App.js`: Main component for the React Native app.
   - `src/screens/RegisterScreen.js`: Screen component for user registration.
   - `src/screens/LoginScreen.js`: Screen component for user login.
   - `src/screens/UserProfileScreen.js`: Screen component for displaying user profile information.
   - `src/screens/SendNotificationScreen.js`: Screen component for sending push notifications.
   - `src/services/AuthService.js`: Service file for handling user authentication.
   - `src/services/NotificationService.js`: Service file for handling push notifications.

3.2. Files to be updated:
   - `package.json`: Update with necessary dependencies for React Native and Push Notifications.
   - `android/app/build.gradle`: Update with necessary configurations for React Native and Push Notifications.
   - `android/app/src/main/AndroidManifest.xml`: Update with necessary permissions and configurations.
   - `ios/YourApp/AppDelegate.m`: Update with necessary configurations for Push Notifications on iOS.

Create App Steps:

1. Capacitor:
   - Install Ionic CLI: `npm install -g @ionic/cli`
   - Create a new Ionic Vue app: `ionic start push-test vue`
   - Add Capacitor to the app: `ionic integrations enable capacitor`
   - Install necessary dependencies: `npm install @capacitor/core @capacitor/push-notifications axios`
   - Initialize Capacitor: `npx cap init`
   - Add Android platform: `npx cap add android`

2. Cordova:
   - Install Cordova CLI: `npm install -g cordova`
   - Create a new Cordova app: `cordova create push-test com.fgx.pulsetest PushTest`
   - Add Android platform: `cordova platform add android`
   - Install necessary plugins: `cordova plugin add cordova-plugin-firebase-messaging cordova-plugin-device`

3. React Native:
   - Install React Native CLI: `npm install -g react-native-cli`
   - Create a new React Native app: `react-native init PushTest`
   - Install necessary dependencies: `npm install @react-native-firebase/app @react-native-firebase/messaging axios`
   - Link the dependencies: `react-native link`

Build Steps:

1. Capacitor:
   - Build the web app: `ionic build`
   - Copy the web assets to the native project: `npx cap copy`
   - Open the Android project: `npx cap open android`
   - Build and run the app from Android Studio

2. Cordova:
   - Build the web app: `cordova build android`
   - Run the app on an Android device or emulator: `cordova run android`

3. React Native:
   - Build and run the app: `react-native run-android`

Release Build Commands:

1. Capacitor:
   - Generate a production build: `ionic build --prod`
   - Copy the web assets to the native project: `npx cap copy`
   - Open the Android project: `npx cap open android`
   - Generate a signed APK from Android Studio

2. Cordova:
   - Generate a release build: `cordova build android --release`
   - Sign and align the APK using Android tools

3. React Native:
   - Generate a release build: `react-native run-android --variant=release`
   - Sign and align the APK using Android tools

APK Location:

1. Capacitor:
   - `android/app/build/outputs/apk/debug/app-debug.apk` (debug build)
   - `android/app/build/outputs/apk/release/app-release.apk` (release build)

2. Cordova:
   - `platforms/android/app/build/outputs/apk/debug/app-debug.apk` (debug build)
   - `platforms/android/app/build/outputs/apk/release/app-release.apk` (release build)

3. React Native:
   - `android/app/build/outputs/apk/debug/app-debug.apk` (debug build)
   - `android/app/build/outputs/apk/release/app-release.apk` (release build)

API Requests:

1. Registration (`/api/user/register`):
   - Method: POST
   - Purpose: Register a new user with username, email, password, and device token.

2. Login (`/api/user/login`):
   - Method: POST
   - Purpose: Authenticate user credentials and retrieve a JWT token.

3. User Details (`/api/user/user_details`):
   - Method: GET
   - Purpose: Retrieve user profile information, including associated device tokens.

4. Update Device Token (`/api/user/update_device_token`):
   - Method: POST
   - Purpose: Update the device token for a user.

5. Send Notification (`/api/notification/send_notification`):
   - Method: POST
   - Purpose: Send a push notification to a specific user's device.

README.md:

# Push Notification Test App

This repository contains example implementations of a push notification test app using Capacitor, Cordova, and React Native.

## Capacitor

### Setup

1. Install Ionic CLI: `npm install -g @ionic/cli`
2. Create a new Ionic Vue app: `ionic start push-test vue`
3. Add Capacitor to the app: `ionic integrations enable capacitor`
4. Install necessary dependencies: `npm install @capacitor/core @capacitor/push-notifications axios`
5. Initialize Capacitor: `npx cap init`
6. Add Android platform: `npx cap add android`

### Build and Run

1. Build the web app: `ionic build`
2. Copy the web assets to the native project: `npx cap copy`
3. Open the Android project: `npx cap open android`
4. Build and run the app from Android Studio

### Release Build

1. Generate a production build: `ionic build --prod`
2. Copy the web assets to the native project: `npx cap copy`
3. Open the Android project: `npx cap open android`
4. Generate a signed APK from Android Studio

## Cordova

### Setup

1. Install Cordova CLI: `npm install -g cordova`
2. Create a new Cordova app: `cordova create push-test com.fgx.pulsetest PushTest`
3. Add Android platform: `cordova platform add android`
4. Install necessary plugins: `cordova plugin add cordova-plugin-firebase-messaging cordova-plugin-device`

### Build and Run

1. Build the web app: `cordova build android`
2. Run the app on an Android device or emulator: `cordova run android`

### Release Build

1. Generate a release build: `cordova build android --release`
2. Sign and align the APK using Android tools

## React Native

### Setup

1. Install React Native CLI: `npm install -g react-native-cli`
2. Create a new React Native app: `react-native init PushTest`
3. Install necessary dependencies: `npm install @react-native-firebase/app @react-native-firebase/messaging axios`
4. Link the dependencies: `react-native link`

### Build and Run

1. Build and run the app: `react-native run-android`

### Release Build

1. Generate a release build: `react-native run-android --variant=release`
2. Sign and align the APK using Android tools

Please refer to the individual folders for more detailed information on each implementation.