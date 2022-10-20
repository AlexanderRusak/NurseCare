import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mainColor} from '../../theme/themeConstants';
import {FileUploadType} from '../imagePicker/ImagePickerComponent';

interface UploadButtonProps {
  title: FileUploadType;
  iconComponent: React.ReactNode;
  handleMethodType: (type: FileUploadType) => void;
}

export const UploadButton = ({
  title,
  iconComponent,
  handleMethodType,
}: UploadButtonProps) => {
  const buttonPressHandler = useCallback(() => {
    handleMethodType(title);
  }, []);

  return (
    <TouchableOpacity onPress={buttonPressHandler} style={styles.container}>
      {iconComponent}
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: mainColor,
    fontWeight: '500',
    fontSize: 20,
  },
});
