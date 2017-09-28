import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
// Import the reducer from each redux module

export default combineReducers({
  router,
  form
})
