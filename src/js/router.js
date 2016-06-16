import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Router, Route, Link, hashHistory } from 'react-router'
import CoachView from './containers/CoachView.jsx'

const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

let store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={CoachView}>
      </Route>
      <Route path="/players" component={Message} />
    </Router>
  </Provider>
), document.getElementById('root'))
