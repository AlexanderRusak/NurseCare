import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { location, LocationProps } from './reducers/location';
import { suggestions, SugggestionProps } from './reducers/suggestion';
import { rootSaga } from './sagas';

export interface IStore {
    suggestions: SugggestionProps
    location: LocationProps
}

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    suggestions: suggestions,
    location: location
})
export const store = configureStore({ reducer: reducers, middleware: [sagaMiddleware] });

sagaMiddleware.run(rootSaga)