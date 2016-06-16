import React from 'react'
import { connect } from 'react-redux'
import CalendarControlPanel from '../components/CalendarControlPanel.jsx'

class CalendarControlPanelContainer extends React.Component {
  render() {
    return(
      <CalendarControlPanel data={this.props.data}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: ['Team Schedule','Player Schedule']
  }
}

export default connect(
  mapStateToProps
)(CalendarControlPanelContainer)
