import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { suggestions, SugggestionProps } from './reducers/suggestion';
import { rootSaga } from './sagas';

export interface IStore {
    suggestions: SugggestionProps
}

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    suggestions: suggestions
})
export const store = configureStore({ reducer: reducers, middleware: [sagaMiddleware] });

sagaMiddleware.run(rootSaga)