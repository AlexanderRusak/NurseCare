import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>News</Text>
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
