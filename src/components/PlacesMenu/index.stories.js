import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import PlacesMenu from '.'
import autocompleteData from '../../../__mocks__/data/places.autocomplete.json'
import placesData from '../../../__mocks__/data/places.json'

const stories = storiesOf('Places Menu', module)
stories.add('Saved locations', () => (
  <div className="storyWrapper">
    <PlacesMenu searchSuggestions={[]} savedPlaces={placesData} />
  </div>
))

stories.add('Search suggestions', () => (
  <div className="storyWrapper">
    <PlacesMenu searchSuggestions={autocompleteData} savedPlaces={placesData} />
  </div>
))
