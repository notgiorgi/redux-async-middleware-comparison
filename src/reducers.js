import { PROMISE_MIDDLEWARE, PROMISE, THUNK } from './actions'

const initial = {
    data: null,
    isFetching: false,
    error: null,
}

const initialPM = {
    ...initial,
}

const initialP = {
    ...initial,
}

const initialT = {
    ...initial,
}


export const promiseMiddlewareReducer = (state = initialPM, action) => {
    switch (action.type) {
        case PROMISE_MIDDLEWARE.FETCH_PENDING:
            return {
                ...state,
                isFetching: true,
            }
        case PROMISE_MIDDLEWARE.FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            }
        case PROMISE_MIDDLEWARE.FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const promiseReducer = (state = initialP, action) => {
    switch (action.type) {
        case PROMISE.FETCH:
            if(action.error) {
                return {
                    ...state,
                    error: action.payload,
                }
            }
            return {
                ...state,
                data: action.payload
            }
        case PROMISE.IS_FETCHING:
            return {
                ...state,
                isFetching: true,
            }
        default:
            return state
    }
}

export const thunkReducer = (state = initialT, action) => {
    switch (action.type) {
        case THUNK.IS_FETCHING:
            return {
                ...state,
                isFetching: true,    
            }
        case THUNK.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
        case THUNK.FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}
