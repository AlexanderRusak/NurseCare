import React from 'react';
import {Text, View, StyleSheet, Slider} from 'react-native';
import {AdvertisementComponent} from '../components/advertisement/AdvertisementComponent';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AdvertisementComponent />
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
