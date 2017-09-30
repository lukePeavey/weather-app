import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { storiesOf } from '@storybook/react'
import CheckBox from '.'

const CheckBoxExample = reduxForm({ form: 'storybook.checkbox' })(() => (
  <form>
    <Field component={CheckBox} label="Checkbox Field" name="checkbox1" />
  </form>
))

storiesOf('Forms/CheckBox', module).add('default', () => (
  <div style={{ padding: 30, display: 'flex', alignItems: 'center' }}>
    <CheckBoxExample />
  </div>
))
