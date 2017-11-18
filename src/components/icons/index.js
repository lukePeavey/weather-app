import React from 'react'
import Icon from './Icon'

/** Expand more (down arrow)  */
export const ExpandMoreIcon = props => (
  <Icon {...props}>
    <svg viewBox="0 0 24 24" height="24" width="24">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Expand less (up arrow) */
export const ExpandLessIcon = props => (
  <Icon {...props}>
    <svg viewBox="0 0 24 24" height="24" width="24">
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Menu icons (3 bars) */
export const MenuIcon = props => (
  <Icon {...props}>
    <svg viewBox="0 0 24 24" height="24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  </Icon>
)

/** Place icon */
export const PlaceIcon = props => (
  <Icon {...props}>
    <svg viewBox="0 0 24 24" height="24" width="24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Search icon */
export const SearchIcon = props => (
  <Icon {...props}>
    <svg viewBox="0 0 24 24" height="24" width="24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Settings gear icon */
export const SettingsIcon = props => (
  <Icon {...props}>
    <svg viewBox="0 0 24 24" height="24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
  </Icon>
)

/** GPS icon (current geo-location) */
export const GpsIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
    </svg>
  </Icon>
)

/** Location arrow (aka near me) */
export const NearMeIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </svg>
  </Icon>
)

/** Show more (three vertical dots) */
export const DotsVerticalIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  </Icon>
)

/** Show more (three horizontal dots) */
export const DotsIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  </Icon>
)

/** Visibility icon  */
export const VisibilityIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  </Icon>
)

/** Send icon */
export const SendIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Add Place icon */
export const AddPlaceIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z" />
    </svg>
  </Icon>
)

/** Add icon */
export const AddIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Add icon */
export const AddCircleIcon = props => (
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

/** Clear icon */
export const ClearIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Account icon */
export const AccountIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Add Account icon */
export const AddAccountIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </Icon>
)

/** Account Circle Icon */
export const AccountCircleIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Forward Arrow */
export const ArrowForwardIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  </Icon>
)

/** Back Arrow*/
export const ArrowBackIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  </Icon>
)
/** Long Back Arrow */

export const KeyboardArrowBackIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
    </svg>
  </Icon>
)

/** Edit Icon */
export const EditIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Drop Down Icon */
export const DropDownIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M7 10l5 5 5-5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)

/** Drop Up Icon */
export const DropUpIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M7 14l5-5 5 5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)
/** Drop Up Icon */
export const FilterListIcon = props => (
  <Icon {...props}>
    <svg height="24" viewBox="0 0 24 24" width="24">
      <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </Icon>
)
