import { call, put, SagaReturnType, select, takeLeading } from "redux-saga/effects";
import { IStore, store } from "..";
import { geoSuggestion } from "../../map/GeoSuggestion";
import { getQuerySelector } from "../selectors/getQuerySelector";
import { ADD_SEARCH_STRING, GET_SUGGESTIONS } from "../types";


async function getSuggestion(query: string) {
    const data = await geoSuggestion(query);
    return data
}

export function* getSuggestionsSaga(query: string) {
    const suggestions: SagaReturnType<typeof getSuggestion> = yield call(getSuggestion, query);
    yield put({
        type: GET_SUGGESTIONS,
        payload: suggestions
    });
}

