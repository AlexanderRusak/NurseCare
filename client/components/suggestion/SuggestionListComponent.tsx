import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import {YamapSuggest} from 'react-native-yamap';
import {SuggestionItem} from './SuggestionItem';

interface SuggestionListComponentProps {
  suggestions: YamapSuggest[];
}

export const SuggestionListComponent = ({
  suggestions,
}: SuggestionListComponentProps) => {
  return suggestions.length ? (
    <ScrollView style={styles.scrollContainer}>
      {suggestions.map((suggestion: YamapSuggest) => (
        <SuggestionItem key={suggestion.uri}  suggestion={suggestion} />
      ))}
    </ScrollView>
  ) : (
    <ActivityIndicator />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    padding:10,
    marginBottom:50,
  },
});
