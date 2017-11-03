import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { authReducer as auth } from './auth/reducer'
import { placesReducer as places } from './places/reducer'
import { settingsReducer as settings } from './settings/reducer'
import { weatherReducer as weather } from './weather/reducer'
import { notificationsReducer as notifications } from './notifications/reducer'

export default combineReducers({
  router,
  form,
  auth,
  places,
  settings,
  weather,
  notifications
})
