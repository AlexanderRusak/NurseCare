import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import YaMap, {Geocoder} from 'react-native-yamap';
import {StackNavigation} from '../interfaces/StackNavigation';
import {HOMESCREEN} from './ScreenNames';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {getPermission} from '../map/permission';

export const GeolocationScreen = () => {
  const {navigate} = useNavigation<StackNavigation>();

  const [currentPosition, setCurrentPosition] = useState<GeoPosition | null>(
    null,
  );
  const [hasPermission, setPermission] = useState(false);

  const backToMainScreenHandler = () => {
    navigate(HOMESCREEN);
  };

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
        { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
      );
  }, [hasPermissionAsync, hasPermission]);

  console.log(currentPosition, 'sss');

  return (
    <View style={styles.container}>
      <Text>Geolactaion</Text>
      {currentPosition ? (
        <YaMap
          initialRegion={{
            lat: currentPosition.coords.latitude,
            lon: currentPosition.coords.longitude,
          }}
          showUserPosition
          style={{flex: 1, width: '100%', height: '100%'}}
        />
      ) : null}
      <Button onPress={backToMainScreenHandler} title="Back" />
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
});
