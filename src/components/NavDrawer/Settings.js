import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Radio, { RadioGroup } from 'material-ui/Radio'
import Switch from 'material-ui/Switch'
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import ListSubheader from 'material-ui/List/ListSubheader'
import Divider from 'material-ui/Divider'

const Settings = ({ classes, settings, changeSetting }) => (
  <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.list}>
    <ListItem className={classes.listItem}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="unit"
          name="unit"
          className={classes.group}
          value={settings.unit}
          onChange={changeSetting}>
          <FormControlLabel value="celsius" control={<Radio />} label="Celsius" />
          <FormControlLabel value="fahrenheit" control={<Radio />} label="Fahrenheit" />
        </RadioGroup>
      </FormControl>
    </ListItem>
    <ListItem className={classes.listItem}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormControlLabel
          control={
            <Switch name="enableAlerts" checked={settings.enableAlerts} onChange={changeSetting} />
          }
          label="Severe Weather Alerts"
        />
      </FormControl>
    </ListItem>
  </List>
)

const styles = ({ spacing }) => ({
  root: {
    display: 'flex'
  },
  group: {
    margin: `${spacing.unit}px 0`,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0
  }
})
export default withStyles(styles)(Settings)
