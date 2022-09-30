import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {mainColor} from '../../theme/themeConstants';
import {AdvertisementComponentItem} from './AdvertisementItem';

export const AdvertisementComponent = () => {
  const advItems = Array(5);

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        activeDotStyle={{
          top: 20,
        }}
        dotStyle={{
          top: 20,
        }}
        activeDotColor={mainColor}>
          <AdvertisementComponentItem />
          <AdvertisementComponentItem />
          <AdvertisementComponentItem />
          <AdvertisementComponentItem />
          <AdvertisementComponentItem />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '95%',
    height: '30%',
    borderWidth: 2,
    borderColor: mainColor,
    borderRadius: 20,
    margin: 5,
  },
});
