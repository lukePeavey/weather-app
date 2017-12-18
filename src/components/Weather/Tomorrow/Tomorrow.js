import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

class WeatherTomorrow extends Component {
  render() {
    const { classes } = this.props
    return <div className={classes.root}>Tomorrow will be sunny</div>
  }
}

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#fafafa',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 100
  }
})

export default withStyles(styles)(WeatherTomorrow)
