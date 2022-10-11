import {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {YamapSuggest} from 'react-native-yamap';
import {useDispatch} from 'react-redux';
import {ADD_CURRENT_LOCATION} from '../../redux/types';
import {mainColor} from '../../theme/themeConstants';
import {getCoordinates} from './helper';

interface SuggestionItemProps {
  suggestion: YamapSuggest;
}

export const SuggestionItem = ({suggestion}: SuggestionItemProps) => {
  const dispatch = useDispatch();

  const suggestionCoordinatesHandle = useCallback(() => {
    const coordinates = getCoordinates(suggestion.uri);
    dispatch({
      type: ADD_CURRENT_LOCATION,
      payload: coordinates,
    });
  }, []);

  return (
    <TouchableOpacity onPress={suggestionCoordinatesHandle}>
      <View style={styles.container}>
        <Text style={styles.title}>{suggestion.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginVertical: 5,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: mainColor,
  },
});
