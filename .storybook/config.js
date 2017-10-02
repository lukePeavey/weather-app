/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import Provider from './provider'
import '../src/styles/index.css'

const req = require.context('../src/', true, /(.stories.js)$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => <Provider story={story()} />)

configure(loadStories, module)
