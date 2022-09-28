import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
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
