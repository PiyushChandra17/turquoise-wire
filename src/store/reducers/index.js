import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import { combineReducers } from 'redux';

import auth from './auth_reducers'
import articles from './articles_reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth,
    articles
})

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

export default store