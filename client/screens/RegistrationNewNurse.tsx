import React, {useCallback, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Asset} from 'react-native-image-picker';

import {ImagePickerComponent} from '../components/imagePicker/ImagePickerComponent';
import {Button} from '../components/ui/Button';
import {Input} from '../components/ui/Input';
import {findFalsyValuesInObject} from '../helpers/helpers';

interface NurseData {
  firstname?: string;
  secondname?: string;
  lastname?: string;
  address?: string;
  specialization?: string;
  selfie?: string;
  scan?: string;
}

export const RegistrationNewNurse = () => {
  const newNurseData = useRef<NurseData>({
    selfie: undefined,
    scan: undefined,
  });
  const [disabled, setDisbled] = useState(
    findFalsyValuesInObject(newNurseData.current),
  );

  const handleData = useCallback((data?: string, key?: string) => {
    newNurseData.current[key as keyof NurseData] = data;
    setDisbled(findFalsyValuesInObject(newNurseData.current));
  }, []);

  return (
    <>
      <ScrollView>
        <Input label="Firstname" handleText={handleData} required />
        <Input label="Lastname" handleText={handleData} required />
        <Input label="Secondname" handleText={handleData} required />
        <Input
          label="Address (City, District)"
          handleText={handleData}
          required
        />
        <Input
          label="Specialization, Experience"
          handleText={handleData}
          required
          rows={2}
        />
        <ImagePickerComponent
          handlePhoto={handleData}
          title="Scan of certification or another official document"
        />
        <ImagePickerComponent
          handlePhoto={handleData}
          title="Selfie with ID or another official document"
        />
      </ScrollView>
      <Button disabled={disabled} size="lg" title="Send to Validation" />
    </>
  );
};
