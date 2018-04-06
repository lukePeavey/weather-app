import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import localForage from 'localforage'
import { persistStore, persistCombineReducers } from 'redux-persist'
import reducers from './reducers'
import rootSaga from './sagas'

// Redux-persist stores a copy of the state in local storage and then
// automatically re-hydrates the store when page is loaded.
// @todo configure expiration time for weather data
export const persistConfig = {
  key: 'root',
  storage: localForage,
  blacklist: ['ui', 'auth'],
}

/** The combined redux reducer for the app */
const rootReducer = persistCombineReducers(persistConfig, reducers)

export default function configureStore(initialState = {}) {
  const enhancers = []
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
  const store = createStore(rootReducer, initialState, composedEnhancers)
  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
