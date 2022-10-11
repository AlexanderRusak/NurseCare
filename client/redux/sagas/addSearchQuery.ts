import { call, SagaReturnType, select } from "redux-saga/effects";
import { getQuerySelector } from "../selectors/getQuerySelector";
import { getSuggestionsSaga } from "./getSuggestions";


export function* addSearchQuerySaga() {
    const searchString: SagaReturnType<typeof getQuerySelector> = yield select(getQuerySelector);    
    yield call(getSuggestionsSaga, searchString);
}