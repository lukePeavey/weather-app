import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import isEmpty from 'lodash/isEmpty'
import ForecastDay from './ForecastDay'
import { CircularProgress } from 'material-ui/Progress'

class WeatherForecast extends Component {
  static propTypes = {
    /** An array of forecast days */
    days: PropTypes.object.isRequired,
    /** The unit to use for temperature */
    unit: PropTypes.oneOf(['fahrenheit', 'celsius']).isRequired
  }
  render() {
    const { classes, days, unit } = this.props
    if (isEmpty(days)) {
      return <CircularProgress size={60} color="accent" className={classes.loader} />
    }
    return (
      <div className={classes.root}>
        <div className={classes.list}>
          {days.map(data => <ForecastDay data={data} unit={unit} classes={classes} />)}
        </div>
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
    minHeight: '100vh',
    width: '100%',
    paddingTop: 100,
    background: 'rgba(255,255,255, 0.9)',
    overflow: 'scroll',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.navbar.height
    }
  },
  list: {
    maxWidth: 800,
    width: '90%',
    margin: '0 auto',
    paddingTop: theme.spacing.unit * 5
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderBottom: 'solid 1px rgba(0,0,0,0.1)',
    marginBottom: 24,
    paddingBottom: 24,
    fontSize: 16
  },
  night: {
    marginTop: 8
  },
  icon: {
    width: 80,
    flex: '0 0 50px',
    marginRight: 20
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 500,
    margin: 0,
    marginBottom: 8
  },
  loader: {
    position: 'fixed',
    top: `calc(50% - 30px)`,
    left: `calc(50% - 30px)`
  }
})

export default withStyles(styles)(WeatherForecast)
