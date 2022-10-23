import React, {FC, useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Image as ReactImage,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import ImageView from 'better-react-native-image-viewing';
import {ImageSource} from 'better-react-native-image-viewing/dist/@types';
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

  const [isVisible, setIsVisible] = useState(false);

  const imageIsVisibleHandler = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <TouchableOpacity onPress={imageIsVisibleHandler} style={styles.container}>
      <ImageView
        backgroundColor={mainColor}
        images={[{uri: uri}] as ImageSource[]}
        imageIndex={0}
        swipeToCloseEnabled={false}
        animationType={'fade'}
        visible={isVisible}
        onRequestClose={imageIsVisibleHandler}
      />
      <ReactImage source={{uri: uri}} style={{width: 80, height: 80}} />
      <Icon
        styles={styles.iconClose}
        iconFont="Ionicons"
        iconName="ios-close-circle-outline"
        onPress={reomoveHanlerById(uri)}
      />
    </TouchableOpacity>
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
