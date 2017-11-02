import * as types from './constants'

/** Fetch user's saved settings (only for logged in users) */
export const fetchSettingsRequest = () => ({
  type: types.FETCH_SETTINGS_REQUEST
})
export const fetchSettingsSuccess = settings => ({
  type: types.FETCH_SETTINGS_SUCCESS,
  payload: { settings }
})
export const fetchSettingsFail = error => ({
  type: types.FETCH_SETTINGS_FAIL,
  payload: { error }
})

/** Saves settings to database (only for logged in users). */
export const saveSettingsRequest = () => ({
  type: types.SAVE_SETTINGS_REQUEST
})
export const saveSettingsSuccess = () => ({
  type: types.SAVE_SETTINGS_SUCCESS
})
export const saveSettingsFail = () => ({
  type: types.SAVE_SETTINGS_FAIL
})

/**
 * Changes the value of single settings in redux state, this doesn't require
 * the user to be logged in. If user is logged in, the saveSettings action
 * will be dispatched after changeSetting to save the settings to database.
 */
export const changeSetting = (name, value) => ({
  type: types.CHANGE_SETTING,
  payload: { name, value }
})
