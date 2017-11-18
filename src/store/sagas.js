import { all } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import placesSaga from './places/sagas'
import weatherSaga from './weather/sagas'
import settingsSaga from './settings/sagas'
import searchbarSaga from './searchbar/sagas'
import savedPlacesSaga from './savedPlaces/sagas'

export default function* rootSaga() {
  // Run all sagas in parallel
  yield all([
    authSaga(),
    placesSaga(),
    weatherSaga(),
    settingsSaga(),
    searchbarSaga(),
    savedPlacesSaga()
  ])
}
