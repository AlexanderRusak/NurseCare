import React, {useCallback, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from '../ui/Icon';

export const ImagePickerComponent = () => {
  const [photo, setPhoto] = useState<ImagePickerResponse | null>(null);

  const handleChoosePhoto = useCallback(() => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.assets) setPhoto(response);
    });
  }, []);

  console.log(photo);

  return (
    <View style={styles.container}>
      {photo && photo.assets && photo.assets.length
        ? photo.assets.map(({id, uri}) => (
            <Image
              key={id}
              source={{uri: uri}}
              style={{width: 300, height: 300}}
            />
          ))
        : null}
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={handleChoosePhoto}>
        <Icon styles={styles.icon} iconFont="Ionicons" iconName="add" />
        <Text style={styles.text}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  icon: {
    fontSize: 40,
    borderRadius: 30,
    color: mainColor,
  },
  innerContainer: {
    height: 60,
    width: '40%',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    bottom: '5%',
    left: '30%',
    borderColor: mainColor,
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: mainColor,
  },
});
