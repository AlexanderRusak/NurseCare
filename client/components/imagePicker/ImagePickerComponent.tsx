import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {
  Asset,
  ImageLibraryOptions,
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {BottomSheet, BottomSheetRef} from 'react-native-sheet';
import {getCamerPermission} from '../../map/permission';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from '../ui/Icon';
import {Image} from '../ui/Image';
import {UploadButton} from '../ui/UploadButton';


interface ImagePickerComponentProps {
  title: string;
}

export type FileUploadType = 'camera' | 'files';

export const ImagePickerComponent = ({title}: ImagePickerComponentProps) => {
  const [photo, setPhoto] = useState<Asset[]>([]);
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const handleChoosePhoto = useCallback(() => {
    bottomSheetRef.current?.show();
  }, []);

  const removeIconHandler = useCallback((url: string) => {
    setPhoto([]);
  }, []);

  const handleMethodType = useCallback(async (type: FileUploadType) => {
    const options: ImageLibraryOptions | CameraOptions = {
      mediaType: 'photo',
      selectionLimit: 1,
      cameraType: 'back',
    };

    type !== 'camera'
      ? launchImageLibrary(options, response => {
          response.assets && setPhoto(response.assets);
          bottomSheetRef.current?.hide();
        })
      : await launchCameraHandler(options);
  }, []);

  const launchCameraHandler = async (options: CameraOptions) => {
    console.log(await getCamerPermission());
    
    (await getCamerPermission())
      ? launchCamera(options, response => {
          return response.assets && setPhoto(response.assets);
        })
      : null;
    bottomSheetRef.current?.hide();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <>
        <BottomSheet height={150} ref={bottomSheetRef}>
          <View style={styles.sheetContainer}>
            <UploadButton
              handleMethodType={handleMethodType}
              title={'camera'}
              iconComponent={
                <Icon
                  styles={styles.iconButton}
                  iconFont="FontAwesome"
                  iconName="camera"
                />
              }
            />
            <UploadButton
              handleMethodType={handleMethodType}
              title={'files'}
              iconComponent={
                <Icon
                  styles={styles.iconButton}
                  iconFont="FontAwesome"
                  iconName="photo"
                />
              }
            />
          </View>
        </BottomSheet>
        {!photo.length ? (
          <TouchableOpacity
            style={styles.innerContainer}
            onPress={handleChoosePhoto}>
            <Icon styles={styles.icon} iconFont="Ionicons" iconName="add" />
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        ) : null}
      </>
      <View style={styles.imageContainer}>
        {photo.length
          ? photo.map(({id, uri}) => (
              <Image
                removeIconHandler={removeIconHandler}
                uri={uri!}
                key={id?.toString()}
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
    alignItems: 'flex-start',
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
    marginTop: 30,
  },
  title: {
    color: mainColor,
    fontSize: 24,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: mainColor,
  },
  imageContainer: {
    alignContent: 'center',
    width: '100%',
    paddingTop:10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  sheetContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
  },
  iconButton: {
    fontSize: 60,
    color: mainColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.38,
    shadowRadius: 5.0,

    elevation: 24,
  },
});
