import { createStore, combineReducers, applyMiddleware } from 'redux'

import promise from 'redux-promise';

import {
    fetchThingP,
    // fetchThingPM,
    // fetchThingT,
} from './actions'


import { 
    promiseReducer,
    promiseMiddlewareReducer,
    thunkReducer,
} from './reducers'

const rootReducer = combineReducers({
    promiseReducer,
    promiseMiddlewareReducer,
    thunkReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(
        promise
    )
)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(
    fetchThingP()
)