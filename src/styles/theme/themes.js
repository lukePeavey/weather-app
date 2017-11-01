import { createMuiTheme } from 'material-ui/styles'
import { primary, secondary } from './palette'

/**
 * Style Theme
 *
 * This defines the colors, spacing, typography, and other stylistic settings
 * for the entire app. The theme is generated with by Material UI's createTheme
 * helper, which merges the custom settings with the base theme. The theme
 * is accessible to any components that are styled with JSS.  To keep things
 * consistent, i am going to use react-jss for all components. The implementation
 * is very similar to aphrodite, so migrating is trivial
 *
 * @see https://material-ui-next.com/customization/themes/
 */
export default createMuiTheme({
  /** Color palette */
  palette: {
    primary,
    secondary,
    type: 'light',
    input: {
      bottomLine: 'rgba(0, 0, 0, 0.2)',
      helperText: 'rgba(0, 0, 0, 0.35)',
      labelText: 'rgba(0, 0, 0, 0.54)',
      inputText: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.42)'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.7)',
      secondary: 'rgba(0, 0, 0, 0.3)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      icon: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      lightDivider: 'rgba(0, 0, 0, 0.075)'
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
      appBar: primary[500],
      contentFrame: '#eeeeee'
    }
  },

  /** Spacing an layout is based on an 8 pt grid */
  spacing: {
    appBarHeight: 50
  },

  /** Typography settings */
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.5em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.71429em',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    button: {
      fontSize: 15,
      textTransform: 'capitalize',
      fontWeight: 400
    }
  }
})
