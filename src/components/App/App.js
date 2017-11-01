import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'

const App = props => (
  <div className={css(styles.app)}>
    <Switch>
      <div>Placeholder for routes</div>
    </Switch>
  </div>
)

const styles = StyleSheet.create({
  app: {}
})

export default App
