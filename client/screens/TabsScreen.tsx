import React from 'react';
import {HomeScreen} from './HomeScreen';
import {SearchScreen} from './SearchScreen';
import {NewsScreen} from './NewsScreen';
import {UserScreen} from './UserScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '../components/ui/Icon';
import {GeolocationComponent} from '../components/geolocation/GeolocationComponent';
import {HOMESCREEN, NEWSSCREEN, SEARCHSCREEN, USERSCREEN} from './ScreenNames';
import {UserHeader} from '../components/user/UserHeader';

const Tab = createBottomTabNavigator();

export const TabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon iconFont="FontAwesome" iconName="home" color={color} />
          ),
          header: ({navigation}) => <GeolocationComponent />,
        }}
        name={HOMESCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon iconFont="FontAwesome" iconName="search" color={color} />
          ),
        }}
        name={SEARCHSCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon iconFont="FontAwesome" iconName="newspaper-o" color={color} />
          ),
        }}
        name={NEWSSCREEN}
        component={NewsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon iconFont="FontAwesome" iconName="user" color={color} />
          ),
          headerShown:false,
        }}
        name={USERSCREEN}
        component={UserScreen}
      />
    </Tab.Navigator>
  );
};
