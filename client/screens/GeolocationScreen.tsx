import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import YaMap from 'react-native-yamap';
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
      <YaMap
        showUserPosition
        style={{flex: 1, width:'100%',height:'100%'}}
      />
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
