import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Router, Route, Link, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import TeamViewContainer from './containers/TeamViewContainer.jsx'


const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

let store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TeamViewContainer}>
      </Route>
      <Route path="/players" component={Message} />
    </Router>
  </Provider>
), document.getElementById('root'))
