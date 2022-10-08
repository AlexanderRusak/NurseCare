import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import YaMap, {Circle, Geocoder} from 'react-native-yamap';
import {StackNavigation} from '../interfaces/StackNavigation';
import {HOMESCREEN} from './ScreenNames';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {getPermission} from '../map/permission';
import {mainColor} from '../theme/themeConstants';
import {MapMenu} from '../map/MapMenu';

export const GeolocationScreen = () => {
  const {navigate} = useNavigation<StackNavigation>();

  const [currentPosition, setCurrentPosition] = useState<GeoPosition | null>(
    null,
  );
  const [hasPermission, setPermission] = useState(false);

  const hasPermissionAsync = useCallback(async () => {
    const hasPermission = await getPermission();
    setPermission(hasPermission);
  }, []);

  useEffect(() => {
    hasPermissionAsync();
    hasPermission &&
      Geolocation.getCurrentPosition(
        position => {
          setCurrentPosition(position);
        },
        err => {
          console.log(err);
        },
        {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
      );
  }, [hasPermissionAsync, hasPermission]);

  return (
    <View style={styles.container}>
      {currentPosition ? (
        <>
          <YaMap
            initialRegion={{
              lat: currentPosition.coords.latitude,
              lon: currentPosition.coords.longitude,
              zoom: 20,
            }}
            showUserPosition
            style={styles.map}>
            {/*           <Circle
            center={{
              lat: currentPosition.coords.latitude,
              lon: currentPosition.coords.longitude,
            }}
            fillColor={mainColor}
            radius={3000}
          /> */}
          </YaMap>
          <MapMenu />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
