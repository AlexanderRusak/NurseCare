import { call, SagaReturnType, select } from "redux-saga/effects";
import { IStore } from "..";
import { getSuggestionsSaga } from "./getSuggestions";


export function* addSearchQuerySaga() {
    const searchString: SagaReturnType<typeof string> = yield select(({ suggestions }: IStore) => suggestions.searchString)
    yield call(getSuggestionsSaga, searchString as string)
}