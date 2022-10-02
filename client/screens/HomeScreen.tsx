import {useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';
import {AdvertisementComponent} from '../components/advertisement/AdvertisementComponent';
import {CardItem} from '../components/card/CardItem';
import {ListItemComponent} from '../components/list/ListItemComponent';
import { ExpandedButton } from '../components/ui/ExpandedButton';
import {GET_USERS, UserData} from '../GraphQl/Queries/usersQuery';

export const HomeScreen = () => {
  const {data: users, loading, error} = useQuery<UserData>(GET_USERS);

  console.log(users?.users, error);

  return (
    <View style={styles.container}>
      <AdvertisementComponent />
      {!loading && !!users?.users ? (
        <ListItemComponent
          data={users?.users.filter(nurse => nurse.cv?.isValidated)}
        />
      ) : (
        <ActivityIndicator />
      )}
      <ExpandedButton title='+'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
