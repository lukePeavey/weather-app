const configs = {
  all: {
    NAMESPACE: 'app'
  },
  // Settings for development
  development: {
    API_URL: 'http://localhost:8000'
  },
  // Settings for production
  production: {
    API_URL: 'http://localhost:8000'
  }
}
const config = {
  ...configs.all,
  ...configs[process.env.NODE_ENV]
}
export default config
