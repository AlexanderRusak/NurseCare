import { IStore } from "..";

export const getQuerySelector = (store: IStore) => store.suggestions.searchString;
export const getSuggestionsSelector = (store: IStore) => store.suggestions.suggestions;