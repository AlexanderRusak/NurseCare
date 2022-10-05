/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import React, {type PropsWithChildren} from 'react';
import {Hoc} from './components/Hoc';
import { MainScreen } from './screens/MainScreen';


import YaMap, { Geocoder } from 'react-native-yamap';

YaMap.init('0c5cc79b-5bbc-4240-965f-c6cfda32b0cd');
Geocoder.init('1032f73f-dda8-4cdc-8307-39c0083f7e93');

const client = new ApolloClient({
  uri: 'http://10.42.0.129:4001/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
