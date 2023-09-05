/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

import usePushNotification from './usePushNotifications';

function App(): JSX.Element {
  const {
    requestUserPermission,
    getFCMToken,
    listenToBackgroundNotifications,
    listenToForegroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
    scheduleNotification,
  } = usePushNotification();

  useEffect(() => {
    const listenToNotifications = () => {
      try {
        getFCMToken();
        requestUserPermission();
        onNotificationOpenedAppFromQuit();
        listenToBackgroundNotifications();
        listenToForegroundNotifications();
        onNotificationOpenedAppFromBackground();
      } catch (error) {
        console.log(error);
      }
    };

    listenToNotifications();
  }, []);

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text style={{fontWeight: 'bold'}}>Test Notification App</Text>
      <Button
        title="Programar notification"
        onPress={() =>
          scheduleNotification(
            '2023-09-05T20:22:00.000Z',
            'Nueva notificación',
            '¿Vamos a jugar?',
          )
        }
      />
    </View>
  );
}

export default App;
