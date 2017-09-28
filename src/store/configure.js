import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import rootSaga from './sagas'

const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routerMiddleware(history)]

export default function configureStore(initialState = {}) {
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const history = createHistory()
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
  const store = createStore(rootReducer, initialState, composedEnhancers)
  sagaMiddleware.run(rootSaga)
  return { store, history }
}
