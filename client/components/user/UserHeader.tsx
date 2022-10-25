import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from '../ui/Icon';

export const UserHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://us.123rf.com/450wm/domenicogelermo/domenicogelermo1909/domenicogelermo190900265/129438391-front-portrait-of-the-woman-with-beauty-face-isolated.jpg?ver=6',
        }}
        width={40}
        height={40}
        style={styles.image}
      />
      <Text>User name</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Icon
          styles={styles.icon}
          iconFont="Entypo"
          iconName="dots-three-vertical"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? '45%' : '50%',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  buttonContainer: {
    position: 'absolute',
    right: 10,
    top: Platform.OS === 'android' ? 10 : 40,
  },
  icon: {
    color: mainColor,
  },
});
