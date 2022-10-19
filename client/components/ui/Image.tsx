import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Image as ReactImage,
  ActivityIndicator,
} from 'react-native';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from './Icon';

interface ImageProps {
  removeIconHandler: (url: string) => void;
  uri: string;
}

export const Image: FC<ImageProps> = ({removeIconHandler, uri}) => {

    
  const reomoveHanlerById = (url: string) => () => {
    removeIconHandler(url);
  };

  return (
    <View style={styles.container}>
      <ReactImage source={{uri: uri}} style={{width: 80, height: 80}} />
      <Icon
        styles={styles.iconClose}
        iconFont="Ionicons"
        iconName="ios-close-circle-outline"
        onPress={reomoveHanlerById(uri)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  iconClose: {
    position: 'absolute',
    top: -15,
    right: -15,
    color: mainColor,
  },
});
