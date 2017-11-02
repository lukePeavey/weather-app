import * as types from './constants'

export const addNotification = notification => ({
  type: types.ADD_NOTIFICATION,
  payload: { notification }
})

export const removeNotification = id => ({
  type: types.REMOVE_NOTIFICATION,
  payload: { id }
})

export const clearNotifications = payload => ({
  type: types.CLEAR_NOTIFICATIONS
})
