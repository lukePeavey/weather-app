import { merge, isEmpty, isObject } from 'lodash'
import { stringify } from 'query-string'
import config from '../config'

const request = function({ endpoint, method, data, params }) {
  const query = params ? `?${stringify(params)}` : ''
  const url = `${config.API_URL}${endpoint}${query}`
  let settings = {
    method,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (isObject(data)) settings.body = JSON.stringify(data)
  return fetch(url, settings)
}

export default {
  get: async (endpoint, params) => {
    let response = await request({ endpoint, params, method: 'get' })
    return !response.ok ? Promise.reject(await response.json()) : await response.json()
  },

  delete: async (endpoint, params) => {
    let response = await request({ endpoint, params, method: 'delete' })
    return !response.ok ? Promise.reject(await response.json()) : await response.json()
  },

  post: async (endpoint, data, params) => {
    let response = await request({ endpoint, data, params, method: 'post' })
    return !response.ok ? Promise.reject(await response.json()) : await response.json()
  },

  put: async (endpoint, data, params) => {
    let response = await request({ endpoint, data, params, method: 'put' })
    return !response.ok ? Promise.reject(await response.json()) : await response.json()
  }
}
