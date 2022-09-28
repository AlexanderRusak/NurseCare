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

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
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
