import React, {useCallback, useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import { ImagePickerComponent } from '../components/imagePicker/ImagePickerComponent';
import {Input} from '../components/ui/Input';

interface NurseData {
  firstname?: string;
  secondname?: string;
}

export const RegistrationNewNurse = () => {
  const newNurseData = useRef<NurseData>({});
  const handleText = useCallback((text: string, key: string) => {
    newNurseData.current[key as keyof NurseData] = text;
    console.log(newNurseData.current);
  }, []);

  return (
    <ScrollView>
      <Input label="Firstname" handleText={handleText} required />
      <Input label="Lastname" handleText={handleText} required />
      <Input label="Secondname" handleText={handleText} required />
      <Input label="Address (City, District)" handleText={handleText} required />
      <Input label="Specialization, Experience" handleText={handleText} required rows={2} />
      <ImagePickerComponent title="Scan of certification or another official document"/>
      <ImagePickerComponent title="Selfie with ID or another official document"/>
    </ScrollView>
  );
};
