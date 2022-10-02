import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface InfoProps {
  header: string;
  text: string;
}

export const Info = ({header, text}: InfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}:</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:5,
  },
  header:{
    fontWeight:'600',
    marginRight:5
  },
  text:{

  }
});
