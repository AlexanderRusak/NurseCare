import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsScreen} from './TabsScreen';
import {GeolocationScreen} from './GeolocationScreen';
import {
  CARDSCREEN,
  GEOLOCATION,
  HOMESCREEN,
  REGISTRATION_NEW_NURSE,
  TABSSCREEN,
} from './ScreenNames';
import {CardScreen} from './CardScreen';
import {User} from '../GraphQl/Queries/userQuery';
import {RegistrationNewNurse} from './RegistrationNewNurse';
import {useSelector} from 'react-redux';

export type StackParamList = {
  [TABSSCREEN]: undefined;
  [GEOLOCATION]: undefined;
  [HOMESCREEN]: undefined;
  [CARDSCREEN]: {
    user: User;
  };
  [REGISTRATION_NEW_NURSE]: undefined;
};

const Stack = createNativeStackNavigator();

export const MainScreen = () => {
  const store = useSelector((store: any) => store);
  console.log(store);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABSSCREEN}
        component={TabsScreen}
      />
      <Stack.Screen
        options={{
          headerTitle:
            GEOLOCATION.charAt(0).toUpperCase() +
            GEOLOCATION.toLowerCase().slice(1),
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
      <Stack.Screen
        /*      options={{
          headerBackTitleVisible: false,
        }} */
        name={REGISTRATION_NEW_NURSE}
        component={RegistrationNewNurse}
      />
    </Stack.Navigator>
  );
};
