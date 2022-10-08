import { Suggest } from "react-native-yamap";

export const geoSuggestion = async (query: string) => {    
    const suggestions = await Suggest.suggest(query);
    Suggest.reset();
    return suggestions;
}