import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {mainColor} from '../theme/themeConstants';
import {Button} from 'react-native-elements';

export const UserScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('+77770204174');
  const [code, setCode] = useState('123456');
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const changePhoneNumberHandler = useCallback((number: string) => {
    setPhoneNumber(number);
  }, []);

  const changeCodeHandler = useCallback((code: string) => {
    setCode(code);
  }, []);

  const signInWithPhoneNumber = async () => {
    try {
      const confiramtion = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confiramtion);
    } catch (e) {
      console.log(e, 'error');
    }
  };

  const confirmCode = async () => {
    try {
      const response = await confirm?.confirm(code);
      if (response) {
        console.log(response);
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={changePhoneNumberHandler}
      />
      <Button title={'Send'} onPress={signInWithPhoneNumber} />
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={changeCodeHandler}
      />
      <Button title={'Confirm'} onPress={confirmCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: mainColor,
    borderWidth: 2,
    width: '50%',
  },
});
