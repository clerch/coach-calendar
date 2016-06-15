import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './src/js/reducers/index'
import { showPlayerSchedule } from './src/js/actions/index'
import App from './src/js/components/App.jsx'
import './src/stylesheets.js'

let store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
