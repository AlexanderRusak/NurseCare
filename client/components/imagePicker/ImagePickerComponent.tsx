import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Asset,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from '../ui/Icon';
import {Image} from '../ui/Image';

export const ImagePickerComponent = () => {
  const [photo, setPhoto] = useState<Asset[]>([]);

  const handleChoosePhoto = useCallback(() => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 2,
    };

    launchImageLibrary(options, response => {
      response.assets && setPhoto(response.assets);
    });
  }, []);

  const removeIconHandler = useCallback((url: string) => {
    setPhoto(photo.filter(p => p.uri !== url));
  }, []);

  return (
    <View style={styles.container}>
      {photo.length < 2 ? (
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={handleChoosePhoto}>
          <Icon styles={styles.icon} iconFont="Ionicons" iconName="add" />
          <Text style={styles.text}>Upload</Text>
        </TouchableOpacity>
      ) : null}
      <View style={styles.imageContainer}>
        {photo.length
          ? photo.map(({id, uri}) => (
              <Image
                removeIconHandler={removeIconHandler}
                uri={uri!}
                key={id}
              />
            ))
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
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
    bottom: '5%',
    left: '5%',
    borderColor: mainColor,
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: mainColor,
  },
  imageContainer: {
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});
