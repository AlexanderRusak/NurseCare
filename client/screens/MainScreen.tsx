import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsScreen} from './TabsScreen';
import {GeolocationScreen} from './GeolocationScreen';
import {GEOLOCATION, HOMESCREEN, TABSSCREEN} from './ScreenNames';

export type StackParamList = {
  [TABSSCREEN]: undefined;
  [GEOLOCATION]: undefined;
  [HOMESCREEN]: undefined;
};

const Stack = createNativeStackNavigator();

export const MainScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABSSCREEN}
        component={TabsScreen}
      />
      <Stack.Screen
        options={{
          headerBackVisible: false,
        }}
        name={GEOLOCATION}
        component={GeolocationScreen}
      />
    </Stack.Navigator>
  );
};
