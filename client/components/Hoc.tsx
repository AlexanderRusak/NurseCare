import {useQuery} from '@apollo/client';
import {Text, View} from 'react-native';
import {GET_NEWS, NewsData} from '../GraphQl/newsQuerry';
import { GET_USER, User, UserPhoneNumber } from '../GraphQl/userQuery';

export const Hoc = () => {
  const {loading, error, data} = useQuery<User, UserPhoneNumber>(GET_USER,{variables:{phoneNumber:'7770204174'}});
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;
  console.log(data, 'dddd');

  return (
    <View>
      
          <Text>{data?.firstName}</Text>
          <Text>{data?.lastName}</Text>
   
    </View>
  );
};
