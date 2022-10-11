import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import YaMap, {Circle, Geocoder} from 'react-native-yamap';
import {StackNavigation} from '../interfaces/StackNavigation';
import {HOMESCREEN} from './ScreenNames';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {getPermission} from '../map/permission';
import {mainColor} from '../theme/themeConstants';
import {MapMenu} from '../map/MapMenu';
import {useSelector} from 'react-redux';
import {IStore, store} from '../redux';

export const GeolocationScreen = () => {
  const {coordinates} = useSelector((store: IStore) => store.location);

  const {navigate} = useNavigation<StackNavigation>();

  const [currentPosition, setCurrentPosition] = useState<
    [number, number] | null
  >(null);
  const [hasPermission, setPermission] = useState(false);

  const hasPermissionAsync = useCallback(async () => {
    const hasPermission = await getPermission();
    setPermission(hasPermission);
  }, []);

  useEffect(() => {
    hasPermissionAsync();
    console.log(coordinates, 'use');

    hasPermission && !coordinates.length
      ? Geolocation.getCurrentPosition(
          ({coords}) => {
            setCurrentPosition([coords.latitude, coords.longitude]);
          },
          err => {
            console.log(err, 'error');
          },
          {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
        )
      : setCurrentPosition(coordinates as [number, number]);
  }, [hasPermissionAsync, hasPermission, coordinates]);

  console.log(currentPosition, 'pos');

  const mapComponent = useMemo(() => {
    return !!currentPosition ? (
      <>
        <YaMap
          initialRegion={{
            lat: currentPosition[1],
            lon: currentPosition[0],
            zoom: 18,
          }}
          showUserPosition
          style={styles.map}>
          <Circle
            center={{
              lat: currentPosition[1],
              lon: currentPosition[0],
            }}
            fillColor={mainColor}
            radius={50}
          />
        </YaMap>
        <MapMenu />
      </>
    ) : null;
  }, [currentPosition]);

  return <View style={styles.container}>{mapComponent}</View>;
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
