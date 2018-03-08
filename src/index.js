import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './styles/theme'
import configureStore from './store/configure'
import registerServiceWorker from './utils/registerServiceWorker'
import App from './components/App'
import './styles/index.css'

const { store, persistor } = configureStore()
render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  </PersistGate>,
  document.getElementById('root')
)

registerServiceWorker()

export default store
