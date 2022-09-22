import {useMutation} from '@apollo/client';
import {useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {ADD_USER, UserInputData} from '../GraphQl/Mutations/addUserMutation';
import {User} from '../GraphQl/Queries/userQuery';

export const Hoc = () => {
  /*   const {loading, error, data} = useQuery<UserData, UserPhoneNumber>(GET_USER, {
    variables: {phoneNumber: '7770204174'},
  }); */

  const [birthDate, setBirthDate] = useState('1995');
  const [firstName, setFirstName] = useState('Sasha Test');
  const [lastName, setLastName] = useState('Sasha Last Name Test');
  const [phoneNumber, setPhoneNumber] = useState('7770204174');
  const [sex, setSex] = useState(true);

  const [addUser, {error, data, loading}] = useMutation<
    {addUser: User},
    {userParams: UserInputData}
  >(ADD_USER, {
    variables: {
      userParams: {
        birthDate,
        firstName,
        lastName,
        phoneNumber,
        sex,
      },
    },
  });

  console.log(data, loading, error);

  const addUserHandler = () => {
    birthDate && firstName && lastName && phoneNumber && sex && addUser();
  };

  return (
    <View>
      <Text onPress={() => console.log('11111')}>1111</Text>
      <Text onPress={() => console.log('11111')}>1111</Text>
      <Text onPress={() => console.log('11111')}>1111</Text>
      <Text onPress={() => console.log('11111')}>1111</Text>
      <Text onPress={() => console.log('11111')}>1111</Text>
      <Text onPress={() => console.log('11111')}>1111</Text>
      <Button onPress={addUserHandler} title="Click" />
    </View>
  );
};
