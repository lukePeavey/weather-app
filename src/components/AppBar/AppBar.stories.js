import React from 'react'
import { storiesOf } from '@storybook/react'
import AppBar from '.'

storiesOf('AppBar', module).add('default', () => (
  <div className="screen" style={{ background: '#E3F2FD', minHeight: '100vh' }}>
    <AppBar />
  </div>
))
