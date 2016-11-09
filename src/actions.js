/**
 * Action types for redux-promise-middleware
 */
export const PROMISE_MIDDLEWARE  = {
    FETCH: 'pm/FETCH',
    FETCH_PENDING: 'pm/FETCH_PENDING',
    FETCH_SUCCESS: 'pm/FETCH_SUCCESS',
    FETCH_ERROR: 'pm/FETCH_ERROR',
}

/**
 * Action types for redux-promise
 */
export const PROMISE = {
    FETCH: 'p/FETCH',
    IS_FETCHING: 'p/IS_FETCHING'
}

/**
 * Action types for redux-thunk
 */
export const THUNK = {
    IS_FETCHING: 't/IS_FETCHING',
    FETCH_SUCCESS: 't/FETCH_SUCCESS',
    FETCH_ERROR: 't/FETCH_ERROR',
}

/**
 * Returns random true or false
 */
const rand = () => !Math.floor(Math.random() * 2)


/**
 * Fake fetch, randomly resolves or rejects in given milliseconds
 * @param {any} url
 * @param {number} [ms=1000]
 */
const fetch = (url, ms = 1000) => 
    new Promise((resolve, reject) => {
        setTimeout(() => rand() ? resolve(url) : reject(url), ms)
    })

/**
 * Sync IS_FETCHING action creator (for redux-promise and redux-thunk)
 * @param {string} text
 * @param {string} middlewareType (p for redux-promise, t for redux-thunk)
 */
export const isFetching = (text, middlewareType) => ({
    type: `${middlewareType}/IS_FETCHING`,
    text,
})


/**
 * Sync FETCH_SUCCESS/FETCH_ERROR action creator (for redux-thunk)
 * @param {any} type
 * @param {any} data
 */
export const loadFetchedData = (data, type) => ({
    type,
    payload: data,
})

/**
 * Async action creators
 */
export const fetchThingPM = () => ({
    action: PROMISE_MIDDLEWARE.FETCH,
    // Implicit promise
    payload: fetch('redux-promise-middleware'),
    /* 
    // or Explicit promise with other data
    payload: {
        other: 'data',
        promise: fetch('Redux Promise-middleware'),
    },
    */
})


export const fetchThingP = () => ({
    type: PROMISE.FETCH,
    payload: fetch('redux-promise'),
})

export const fetchThingT = () => dispatch => {
    return fetch('redux-thunk')
        .then(res => dispatch(loadFetchedData(res, THUNK.FETCH_SUCCESS)))
        .catch(err => dispatch(loadFetchedData(err, THUNK.FETCH_ERROR)))
}
