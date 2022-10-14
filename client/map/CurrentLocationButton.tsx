import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../components/ui/Icon';
import {mainColor} from '../theme/themeConstants';
import {useDispatch} from 'react-redux';
import {ADD_CURRENT_LOCATION} from '../redux/types';

export const CurrentLocationButton = () => {
  const dispatch = useDispatch();

  const handleCurrentLoccation = useCallback(() => {
    dispatch({
      type: ADD_CURRENT_LOCATION,
      payload: [],
    });
  }, [dispatch]);

  return (
    <TouchableOpacity onPress={handleCurrentLoccation} style={styles.container}>
      <Icon iconFont="Ionicons" iconName="locate" size={45} color={mainColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '2%',
    right: '2%',
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: mainColor,
    borderWidth: 2,
    backgroundColor: '#fff',
  },
});
