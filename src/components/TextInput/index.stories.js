import React from 'react'
import { storiesOf } from '@storybook/react'
import TextInput from '.'

storiesOf('Forms/TextInput', module).add('default', () => (
  <div className="storyWrapper">
    <TextInput placeholder="Enter some text" type="text" name="text_input" />
  </div>
))
