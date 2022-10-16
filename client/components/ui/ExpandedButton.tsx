import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import {StackNavigation} from '../../interfaces/StackNavigation';
import {REGISTRATION_NEW_NURSE} from '../../screens/ScreenNames';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from './Icon';

export const ExpandedButton = () => {
  const {navigate} = useNavigation<StackNavigation>();

  const registrationNewNurseHandle = () => {
    navigate(REGISTRATION_NEW_NURSE);
  };

  return (
    <TouchableOpacity
      style={styles.innerContainer}
      onPress={registrationNewNurseHandle}>
      <Icon styles={styles.icon} iconFont="Ionicons" iconName="add" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    bottom: '5%',
    right: '5%',
  },
  icon: {
    fontSize: 40,
    color: 'white',
  },
});
