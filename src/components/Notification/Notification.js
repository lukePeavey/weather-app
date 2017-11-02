import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import SnackBar, { SnackbarContent } from 'material-ui/Snackbar'

class Notification extends PureComponent {
  static propTypes = {
    remove: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    action: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
    anchorOrigin: PropTypes.object,
    autoHideDuration: PropTypes.number,
    open: PropTypes.bool
  }
  static defaultProps = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    autoHideDuration: 4000,
    message: null,
    action: null,
    open: true
  }

  state = { mounted: false }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  handleRequestClose = () => {
    this.setState({ mounted: false })
  }

  handleExited = () => {
    this.props.remove(this.props.id)
  }

  render() {
    const { open, action, message, ...props } = this.props
    return (
      <SnackBar
        open={this.state.mounted && open}
        onRequestClose={this.handleRequestClose}
        onExited={this.handleExited}
        {...props}>
        <SnackbarContent message={message} action={action} />
      </SnackBar>
    )
  }
}

export default Notification
