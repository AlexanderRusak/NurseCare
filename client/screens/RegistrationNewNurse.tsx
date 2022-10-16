import React, {useCallback, useRef} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Input} from '../components/ui/Input';

interface NurseData {
  firstname?: string;
  secondname?: string;
}

export const RegistrationNewNurse = () => {
  const newNurseData = useRef<NurseData>({
    firstname: undefined,
    secondname: undefined,
  });
  const handleText = useCallback((text: string, key: string) => {
    newNurseData.current[key as keyof NurseData] = text;
    console.log(newNurseData.current);
  }, []);

  return (
    <View>
      <Input label="First Name" handleText={handleText} />
      <Input label="Second Name" handleText={handleText} />
    </View>
  );
};
