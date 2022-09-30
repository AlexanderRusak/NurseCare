import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AdvertisementComponent} from '../components/advertisement/AdvertisementComponent';
import { FullCardItem } from '../components/card/FullCardItem';
import { UserData} from '../GraphQl/Queries/userQuery';

interface CardScreenParams {
  params: UserData;
  key: string;
  name: string;
}

export const CardScreen = () => {
  const {params} = useRoute<CardScreenParams>();
  return (
    <View style={styles.container}>
      <AdvertisementComponent />
      <FullCardItem user={params.user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
