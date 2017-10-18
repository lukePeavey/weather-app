import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configureStore(initialState = {}) {
  const history = createHistory()
  const enhancers = []
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware, routerMiddleware(history)]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
  const store = createStore(rootReducer, initialState, composedEnhancers)
  sagaMiddleware.run(rootSaga)
  return { store, history }
}
