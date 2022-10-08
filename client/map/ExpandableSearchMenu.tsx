import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Icon} from '../components/ui/Icon';
import {useDebounce} from '../hooks/useDebouncer';
import {ADD_SEARCH_STRING, GET_SUGGESTIONS} from '../redux/types';
import {mainColor} from '../theme/themeConstants';
import {geoSuggestion} from './GeoSuggestion';

interface ExpandableSearchMenuProps {}

export const ExpandableSearchMenu = ({}: ExpandableSearchMenuProps) => {
  const [searchString, setSearchString] = useState('');
  const debounceValue = useDebounce(searchString);
  const dispatch = useDispatch();

  const changeTextHandler = useCallback((text: string) => {
    setSearchString(text);
  }, []);

  useEffect(() => {
    dispatch({
      type: ADD_SEARCH_STRING,
      payload: debounceValue,
    });
  }, [debounceValue]);

  return (
    <View style={styles.container}>
      <Icon styles={styles.icon} iconFont="FontAwesome" iconName="search" />
      <TextInput
        onChangeText={changeTextHandler}
        keyboardType="default"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    borderColor: mainColor,
    borderWidth: 2,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: 10,
    color: mainColor,
  },
  input: {
    width: '80%',
    marginLeft: 10,
    height: '100%',
    padding: 10,
  },
});
