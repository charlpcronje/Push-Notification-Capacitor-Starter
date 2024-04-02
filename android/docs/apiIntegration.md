# API Integration

To start sending push notifications using Firebase Cloud Messaging (FCM) with your app and backend API, there are a few more steps you need to follow:

1. Set up Firebase Cloud Messaging:
   - Go to the Firebase Console (https://console.firebase.google.com/) and select your project.
   - Navigate to the "Cloud Messaging" tab in the project settings.
   - Copy the "Server Key" (also known as the FCM Server Key or API Key) from the "Project credentials" section. You will need this key to send push notifications from your backend API.

2. Configure your backend API:
   - In your backend API project, add the Firebase Admin SDK dependency. The steps may vary depending on your backend technology stack.
   - Initialize the Firebase Admin SDK in your backend code using the service account key file (e.g., `serviceAccountKey.json`) that you can download from the Firebase Console.
   - Use the Firebase Admin SDK to send push notifications to specific devices or topics using the device tokens or topic subscriptions.

3. Update your app:
   - In your app's `notification.service.ts` file, implement the logic to subscribe the user's device to FCM topics (if needed) and handle incoming push notifications.
   - When a user logs in or registers, send the device token to your backend API to associate it with the user.
   - Handle the received push notifications in your app and display them to the user as needed.

4. Test push notifications:
   - Use the Firebase Console to send test push notifications to your app.
   - Verify that the notifications are received and displayed correctly on the device.
   - Test sending push notifications from your backend API using the FCM Server Key and ensure that they are delivered to the intended devices.

Regarding the Firebase database, it is not mandatory for sending push notifications. FCM handles the delivery of notifications to devices, and you don't necessarily need to store any data in the Firebase Realtime Database or Cloud Firestore for push notifications to work.

However, if your app requires storing additional data related to users, devices, or notifications, you can set up a database in Firebase (either Realtime Database or Cloud Firestore) to store and retrieve that data as needed.

Once you have completed the above steps and tested that push notifications are working as expected, you should be ready to start sending push notifications to your app users.

Remember to handle edge cases, such as when a device token is no longer valid or when a user logs out, and ensure that you have proper error handling and logging in place for monitoring and debugging purposes.

If you encounter any issues or need further guidance, refer to the Firebase Cloud Messaging documentation (https://firebase.google.com/docs/cloud-messaging) and the documentation for your specific backend technology stack.