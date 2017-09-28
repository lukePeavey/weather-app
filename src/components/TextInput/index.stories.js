import React from 'react'
import { storiesOf } from '@storybook/react'
import TextInput from '.'

storiesOf('TextInput', module).add('default', () => (
  <TextInput placeholder="Enter some text" type="text" />
))
