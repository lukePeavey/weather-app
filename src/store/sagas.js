import { all } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import placesSaga from './places/sagas'
import weatherSaga from './weather/sagas'
import settingsSaga from './settings/sagas'
import uiSagas from './ui/sagas'
import savedPlacesSaga from './savedPlaces/sagas'
import notificationSaga from './notifications/sagas'

export default function* rootSaga() {
  // Run all sagas in parallel
  yield all([
    authSaga(),
    placesSaga(),
    weatherSaga(),
    settingsSaga(),
    uiSagas(),
    savedPlacesSaga(),
    notificationSaga()
  ])
}
