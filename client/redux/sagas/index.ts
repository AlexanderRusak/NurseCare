import { takeEvery, fork } from 'redux-saga/effects'
import { ADD_SEARCH_STRING, GET_SUGGESTIONS } from '../types'
import { addSearchQuerySaga } from './addSearchQuery';
import { getSuggestionsSaga } from './getSuggestions';

export function* workerSaga() {


}

export function* watcherSaga() {
    yield takeEvery(ADD_SEARCH_STRING, addSearchQuerySaga);
}


export function* rootSaga() {
    yield fork(watcherSaga)
}