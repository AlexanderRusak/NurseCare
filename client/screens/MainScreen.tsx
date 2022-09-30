import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsScreen} from './TabsScreen';
import {GeolocationScreen} from './GeolocationScreen';
import {CARDSCREEN, GEOLOCATION, HOMESCREEN, TABSSCREEN} from './ScreenNames';
import {CardScreen} from './CardScreen';
import { User } from '../GraphQl/Queries/userQuery';

export type StackParamList = {
  [TABSSCREEN]: undefined;
  [GEOLOCATION]: undefined;
  [HOMESCREEN]: undefined;
  [CARDSCREEN]: {
    user: User;
  };
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
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
        }}
        name={CARDSCREEN}
        component={CardScreen}
      />
    </Stack.Navigator>
  );
};
