import React from 'react'
import { storiesOf } from '@storybook/react'
import LoadingDots from '.'
import { StyleSheet, css } from 'aphrodite/no-important'

const stories = storiesOf('LoadingDots', module)
stories.add('Small', () => (
  <div className="storyWrapper">
    <LoadingDots size={7} />
  </div>
))
stories.add('Large', () => (
  <div className="storyWrapper">
    <LoadingDots size={18} />
  </div>
))
stories.add('Custom color', () => (
  <div className="storyWrapper">
    <LoadingDots size={18} color="#ff7921" />
  </div>
))

const styles = StyleSheet.create({
  thing: { display: 'none' }
})
