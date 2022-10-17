import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {Input as LibraryInput} from 'react-native-elements';
import {dangerMainColor, mainColor} from '../../theme/themeConstants';
import {Icon} from './Icon';
interface InputProps {
  label?: string;
  defaultText?: string;
  placeholder?: string;
  inputStyle?: StyleProp<any>;
  labelStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<TextStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
  handleText: (text: string, key: string) => void;
  required?: boolean;
  errorMessageText?: string;
  rows?: number;
}

export const Input = ({
  label = 'Label',
  defaultText,
  placeholder = label,
  inputStyle,
  labelStyle,
  inputContainerStyle,
  handleText,
  required = false,
  errorMessageText = '*Required',
  errorMessageStyle,
  rows = 1,
}: InputProps) => {
  const [text, setText] = useState(defaultText || undefined);

  useEffect(() => {
    text && handleText(text, label.replace(/\s+/g, '').toLowerCase());
  }, [text]);

  const changeTextHandler = useCallback((text: string) => {
    setText(text);
  }, []);

  const clearTextHandler = useCallback(() => {
    setText('');
  }, []);

  const inputStyles: StyleProp<TextStyle> = useMemo(() => {
    return inputStyle
      ? {...inputStyle, height: 50 * rows}
      : {...styles.defaultInputStyle, height: 50 * rows};
  }, [rows]);

  return (
    <View style={styles.container}>
      <LibraryInput
        multiline={rows > 1}
        value={text}
        label={label}
        placeholder={placeholder}
        autoCompleteType={undefined}
        inputStyle={inputStyles}
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
        errorMessage={required && text === '' ? errorMessageText : undefined}
        errorStyle={errorMessageStyle || styles.error}
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
    height: 50,
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
  error: {
    color: dangerMainColor,
  },
});
