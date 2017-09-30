import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import LoginForm from '.'

storiesOf('Forms/LoginForm', module).add('Default', () => (
  <LoginForm onSubmit={event => console.log(event)} />
))
