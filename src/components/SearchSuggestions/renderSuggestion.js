import React from 'react'
import get from 'lodash/get'
import { PlaceIcon } from '../icons'

/**
 * Renders a single autocomplete suggestion.
 *
 * @see https://developers.google.com/places/web-service/autocomplete
 * @param {Object} suggestion - Suggestion returned by Google Places Autocomplete Request
 * @param {Object} suggestion.structured_formatting
 * @param {string} suggestion.structured_formatting.main_text
 * @param {string} suggestion.structured_formatting.secondary_text
 * @param {string} suggestion.description
 * @param {Object} classes - css styles
 * @param {Function} handleSelect - a callback function to executed when a suggestion is selected
 * @return jsx element
 */
export default function renderSuggestion({ suggestion, classes, handleSelect }) {
  const mainText = get(suggestion, 'structured_formatting.main_text')
  const secondaryText = get(suggestion, 'structured_formatting.secondary_text', '')
  const description = suggestion.description
  return (
    <button
      className={classes.item}
      onClick={event => handleSelect(event, suggestion)}
      key={suggestion.place_id}>
      <PlaceIcon className={classes.icon} />
      <span className="text">
        <strong>{`${secondaryText ? mainText + ', ' : description}`}</strong>
        <span>{secondaryText}</span>
      </span>
    </button>
  )
}
