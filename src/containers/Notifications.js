import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notification from '../components/Notification'
import isEmpty from 'lodash/isEmpty'
import * as actions from '../store/notifications/actions'
import * as fromState from '../store/selectors'

class NotificationsContainer extends Component {
  removeNotification = id => {
    this.props.dispatch.removeNotification(id)
  }
  render() {
    const { notifications } = this.props
    return (
      <div className="notifications">
        {notifications.map(props => <Notification {...props} remove={this.removeNotification} />)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  notifications: fromState.getNotifications(state)
})

const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)
