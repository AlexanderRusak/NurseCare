import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {StackNavigation} from '../../interfaces/StackNavigation';
import {GEOLOCATION} from '../../screens/ScreenNames';
import {Icon} from '../ui/Icon';

export const GeolocationComponent = () => {
  const {navigate} = useNavigation<StackNavigation>();

  const geolocationButtonHanlde = () => {
    navigate(GEOLOCATION);
  };

  return (
    <View style={styles.container}>
      <View style={styles.geoLocationContainer}>
        <Text>Geolocation Address</Text>
        <TouchableOpacity
          onPress={geolocationButtonHanlde}
          style={styles.editButton}>
          <Icon iconFont="FontAwesome" iconName="edit" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 0 : '15%',
    alignItems: 'center',
    justifyContent: Platform.OS === 'android' ? 'center' : 'flex-end',
  },
  geoLocationContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
  },
  editButton: {
    padding: 5,
  },
});
