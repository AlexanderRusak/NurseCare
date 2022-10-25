import {useNavigation} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Button,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import YaMap, {Circle, Geocoder, Marker, Point} from 'react-native-yamap';
import {StackNavigation} from '../interfaces/StackNavigation';
import {HOMESCREEN} from './ScreenNames';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {getPermission} from '../map/permission';
import {mainColor} from '../theme/themeConstants';
import {MapMenu} from '../map/MapMenu';
import {useSelector} from 'react-redux';
import {IStore} from '../redux';
import {Coordinates, CoordinatesContext} from '../context/CoordinatesContext';
import {CurrentLocationButton} from '../map/CurrentLocationButton';
import {Icon} from '../components/ui/Icon';

export const GeolocationScreen = () => {
  const {coordinates} = useSelector((store: IStore) => store.location);
  const {update} = useContext(Coordinates);

  const [currentPosition, setCurrentPosition] = useState<
    [number, number] | null
  >(null);
  const [hasPermission, setPermission] = useState(false);

  const hasPermissionAsync = useCallback(async () => {
    const hasPermission = await getPermission();
    setPermission(hasPermission);
  }, []);

  const mapClickHandle = useCallback(
    async ({nativeEvent}: NativeSyntheticEvent<Point>) => {
      setCurrentPosition([nativeEvent.lat, nativeEvent.lon]);
      const {response} = await Geocoder.geocode({
        lat: nativeEvent.lat,
        lon: nativeEvent.lon,
      });
      update?.({
        coordinates: [nativeEvent.lat, nativeEvent.lon],
        title: response.GeoObjectCollection.featureMember[0].GeoObject.name,
      });
    },
    [currentPosition, coordinates],
  );

  useEffect(() => {
    hasPermissionAsync();
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

  const mapComponent = useMemo(() => {
    return !!currentPosition?.length ? (
      <>
        <YaMap
          onMapPress={mapClickHandle}
          initialRegion={{
            lat: currentPosition[0],
            lon: currentPosition[1],
            zoom: 18,
          }}
          style={styles.map}>
          <Marker
            point={{
              lat: currentPosition[0],
              lon: currentPosition[1],
            }}>
            <Icon
              styles={styles.marker}
              iconFont="FontAwesome"
              iconName="map-marker"
            />
          </Marker>
        </YaMap>
        <React.Fragment>
          <MapMenu />
          <CurrentLocationButton />
        </React.Fragment>
      </>
    ) : null;
  }, [currentPosition, coordinates]);

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
  marker: {
    position: 'absolute',
    paddingBottom: 50,
    color: mainColor,
    fontSize: 50,
  },
});
