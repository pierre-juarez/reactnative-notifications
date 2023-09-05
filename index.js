/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(remoteMessage => {
  // Your code to handle notifications in killed state. For example
  console.log('Killed state notification', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
