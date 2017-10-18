import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import SignupForm from '.'

storiesOf('Forms/SignupForm', module).add('Default', () => (
  <SignupForm onSubmit={event => console.log(event)} />
))
