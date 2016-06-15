import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Router, Route, Link, browserHistory } from 'react-router'
import CoachView from './containers/CoachView.jsx'

let store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={CoachView}>
        <Route path="whatever" component={CoachView}>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
