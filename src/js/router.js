import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Router, Route, Link, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import CoachViewContainer from './containers/CoachViewContainer.jsx'


const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

let store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={CoachViewContainer}>
      </Route>
      <Route path="/players" component={Message} />
      <Route path="*" component={CoachViewContainer} />
    </Router>
  </Provider>
), document.getElementById('root'))
