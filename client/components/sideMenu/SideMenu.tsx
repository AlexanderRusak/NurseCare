import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Animated,
} from 'react-native';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from '../ui/Icon';

interface SideMenuProps {
  children: React.ReactNode;
  open?: boolean;
  onToggleHandler: (toggle: boolean) => void;
}

export const SideMenu = ({children, open, onToggleHandler}: SideMenuProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    return Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    console.log(open,'dsdsd');

    !open ? fadeIn : fadeOut;
  }, [open]);

  const onCloseHandler = useCallback(() => {
    onToggleHandler(false);
  }, []);

  return (
    <View style={styles.container}>
      {children}
      <Animated.View style={(styles.menuContainer, {opacity: fadeAnim})}>
        <TouchableOpacity>
          <Icon
            styles={styles.iconClose}
            iconFont="Ionicons"
            iconName="ios-close"
            onPress={onCloseHandler}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: '#ccc',
    zIndex: 99,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  iconClose: {
    marginTop: Platform.OS === 'android' ? 10 : 50,
    marginLeft: 10,
    color: mainColor,
  },
});
