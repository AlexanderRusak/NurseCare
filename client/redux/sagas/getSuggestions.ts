import { call, SagaReturnType, select, takeLeading } from "redux-saga/effects";
import { IStore } from "..";
import { geoSuggestion } from "../../map/GeoSuggestion";
import { ADD_SEARCH_STRING } from "../types";


async function getSuggestion(query: string) {
    const suggestions = await geoSuggestion(query);
    console.log(suggestions,'333333');
    return suggestions
}

export function* getSuggestionsSaga(query:string) {
    console.log(query,'dddddz');
    const suggestions: SagaReturnType<typeof getSuggestion> = yield call(getSuggestion, query);
    console.log(suggestions,'2222');
}

