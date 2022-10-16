import React, {useCallback, useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {Input as LibraryInput} from 'react-native-elements';
import {mainColor} from '../../theme/themeConstants';
import {Icon} from './Icon';
interface InputProps {
  label?: string;
  defaultText?: string;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<TextStyle>;
  handleText: (text: string, key: string) => void;
}

export const Input = ({
  label = 'Label',
  defaultText,
  placeholder = 'Input placeholder',
  inputStyle,
  labelStyle,
  inputContainerStyle,
  handleText,
}: InputProps) => {
  const [text, setText] = useState(defaultText || '');

  useEffect(() => {
    handleText(text, label.replace(/\s+/g, '').toLowerCase());
  }, [text]);

  const changeTextHandler = useCallback((text: string) => {
    setText(text);
  }, []);

  const clearTextHandler = useCallback(() => {
    setText('');
  }, []);

  return (
    <View style={styles.container}>
      <LibraryInput
        value={text}
        label={label}
        placeholder={placeholder}
        autoCompleteType={undefined}
        inputStyle={inputStyle || styles.defaultInputStyle}
        labelStyle={labelStyle || styles.defaultInputLabelStyle}
        inputContainerStyle={
          inputContainerStyle || styles.defaultInputContainerStyle
        }
        onChangeText={changeTextHandler}
        rightIcon={
          !!text ? (
            <Icon
              size={24}
              styles={styles.iconClose}
              iconFont="Ionicons"
              iconName="close"
              onPress={clearTextHandler}
            />
          ) : undefined
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  defaultInputStyle: {
    color: mainColor,
    height: 47,
  },
  defaultInputLabelStyle: {
    color: mainColor,
    fontSize: 24,
    fontWeight: '500',
  },
  defaultInputContainerStyle: {
    borderBottomColor: mainColor,
    borderBottomWidth: 1,
  },
  iconClose: {
    color: mainColor,
    padding: 0,
  },
});
