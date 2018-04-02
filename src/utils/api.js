import { isObject } from 'lodash'
import { stringify } from 'query-string'
import config from '../config'

/**
 * Makes api requests using native fetch.
 * @param {object} options
 * @param options.endpoint {string} required api endpoint ie '/weather/'
 * @param options.params {object} query parameters
 * @param options.data {object} data to send with the request
 */
const request = function({ endpoint, params, method, data }) {
  const query = params ? `?${stringify(params)}` : ''
  const url = `${config.API_URL}${endpoint}${query}`
  let settings = {
    method,
    credentials: 'include', // this is required so fetch will include cookies in request
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (isObject(data)) {
    // Convert form data to json and include it in the body of the request
    settings.body = JSON.stringify(data)
  }
  return fetch(url, settings)
}

/**
 * Simple API  client
 */
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
