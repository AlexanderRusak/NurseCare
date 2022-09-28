import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigation} from '../interfaces/StackNavigation';
import {HOMESCREEN} from './ScreenNames';

export const GeolocationScreen = () => {
  const {navigate} = useNavigation<StackNavigation>();

  const backToMainScreenHandler = () => {
    navigate(HOMESCREEN);
  };

  return (
    <View style={styles.container}>
      <Text>Geolactaion</Text>
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
