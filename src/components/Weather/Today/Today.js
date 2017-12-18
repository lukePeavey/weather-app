import React, { PureComponent } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import WeatherIcon from '../../WeatherIcon'
import { getIconName, getCurrentTemp, getWeatherBackground } from '../../../utils/weatherUtils'
import { CircularProgress } from 'material-ui/Progress'

class WeatherToday extends PureComponent {
  static propTypes = {
    conditions: PropTypes.object,
    unit: PropTypes.oneOf(['celsius', 'fahrenheit']).isRequired
  }
  static defaultProps = {
    unit: 'fahrenheit'
  }

  render() {
    const { unit, conditions: data, classes } = this.props
    const icon = getIconName(data)
    const background = getWeatherBackground(data)
    const styles = {
      backgroundImage: `url(images/${background.image}.png)`
    }
    return (
      <div className={classes.root} style={styles}>
        {isEmpty(data) ? (
          <CircularProgress size={64} color="primary" />
        ) : (
          <section className={classes.content}>
            <div className={classes.temp}>{getCurrentTemp(data, unit)}&deg;</div>
            <div className={classes.conditions}>
              <div className={classes.text}>{data.weather}</div>
              <WeatherIcon name={icon} className={classes.icon} />
            </div>
          </section>
        )}
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundSize: 'contain',
    backgroundPosition: 'center bottom',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 100,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.navbar.height
    }
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: theme.spacing.maxContentWidth,
    marginBottom: 'auto'
  },
  temp: {
    width: '50%',
    padding: 16,
    color: '#fff',
    fontSize: 112,
    lineHeight: 1,
    height: 112,
    fontWeight: 300
  },
  conditions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 16,
    paddingTop: 24,
    color: '#fff'
  },
  icon: {
    width: 100
  },

  [theme.breakpoints.up('sm')]: {
    content: {
      padding: theme.spacing.unit * 10
    },
    temp: {
      fontSize: 170,
      lineHeight: 1,
      height: 140
    },
    icon: {
      width: 150
    }
  }
})

export default withStyles(styles)(WeatherToday)
