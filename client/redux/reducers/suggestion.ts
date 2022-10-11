import { State } from "react-native-gesture-handler"
import { YamapSuggest } from "react-native-yamap"
import { ADD_SEARCH_STRING, GET_SUGGESTIONS } from "../types"


export interface SugggestionProps {
    suggestions: YamapSuggest[],
    searchString: string
}

const initialState: SugggestionProps = {
    suggestions: [],
    searchString: ''
}

export const suggestions = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SUGGESTIONS: {
            return {
                ...state,
                suggestions: action.payload
            }
        }
        case ADD_SEARCH_STRING: {
            return {
                ...state,
                suggestions: [],
                searchString: action.payload
            }
        }
    }
    return state
}