import {gql, useMutation, useQuery} from '@apollo/client';
import {graphql} from 'graphql';
import {useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {ADD_CV, User_CV_Data} from '../GraphQl/Mutations/addCVMutation';
import {ADD_USER, UserInputData} from '../GraphQl/Mutations/addUserMutation';
import {EDIT_USER, UserEditData} from '../GraphQl/Mutations/editDataMutation';
import {User, UserData,} from '../GraphQl/Queries/usersQuery';
import {GET_USER} from '../GraphQl/Queries/userQuery';

export const Hoc = () => {
  /*   const {loading, error, data} = useQuery<UserData, UserPhoneNumber>(GET_USER, {
    variables: {phoneNumber: '7770204174'},
  }); */

  const [birthDate, setBirthDate] = useState('1995');
  const [firstName, setFirstName] = useState('Sasha Test');
  const [lastName, setLastName] = useState('Sasha Last Name Test');
  const [phoneNumber, setPhoneNumber] = useState('7770204174');
  const [sex, setSex] = useState(true);

  const [addUser] = useMutation<User, UserInputData>(ADD_USER);
  const [editUser] = useMutation<User, UserEditData>(EDIT_USER);
  const [addUserCV, {data, error}] = useMutation<void, User_CV_Data>(ADD_CV);

  const addUserHandler = () => {
    addUser({variables: {firstName, lastName, sex, birthDate, phoneNumber}});
  };

  const editUserHandler = () => {
    editUser({variables: {sex: true, phoneNumber: '2020327'}});
  };

  const addCVHandler = () => {
    addUserCV({
      variables: {
        phoneNumber: '2020327',
        address: 'aaaa2',
        docScan: 'bbbb',
        idScan: 'ccccc2',
        secondName: 'ddddd',
        info: 'eeeee2',
      },
    });
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
      <Button onPress={editUserHandler} title="Edit" />
      <Button onPress={addCVHandler} title="AddCV" />
    </View>
  );
};
