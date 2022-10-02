import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScreenContainer} from 'react-native-screens';
import {StackNavigation} from '../../interfaces/StackNavigation';
import {REGISTRATION_NEW_NURSE} from '../../screens/ScreenNames';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from './Icon';

interface ExpandedButtonProps {
  title?: string;
}

export const ExpandedButton = ({title}: ExpandedButtonProps) => {
  const [isFull, setIsFull] = useState(false);

  const {navigate} = useNavigation<StackNavigation>();

  const registrationNewNurseHandle = useCallback(() => {
    navigate(REGISTRATION_NEW_NURSE);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={registrationNewNurseHandle}>
        <Icon styles={styles.icon} iconFont="Ionicons" iconName="add" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: '5%',
    right: 10,
    alignSelf: 'flex-end',
  },
  innerContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  icon: {
    fontSize: 40,
    color: 'white',
  },
});
