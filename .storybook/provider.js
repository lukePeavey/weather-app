import React from 'react'
import { addDecorator } from '@storybook/react'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../src/store/configure'

const { store } = configureStore()

export default function Provider({story}) {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        {story}
      </BrowserRouter>
    </ReduxProvider>
  )
}
