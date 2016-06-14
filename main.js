import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './src/js/components/Calendar.jsx';
import PlayerBox from './src/js/components/player-box/PlayerBox.jsx';
import './src/stylesheets.js';

var players = [{ key: 1, name: 'Billy S.' }, { key: 2, name: 'Robert D.' }, { key: 3, name: 'Doug R.' }, { key: 4, name: 'Jonny B.' }, { key: 5, name: 'Tommy R.' }, { key: 6, name: 'Mark S.' }, { key: 7, name:
               'Sam T.' }, { key: 8, name: 'Jack N.' }, { key: 9, name: 'Rodney T.' }, { key: 10, name: 'Paul R.' }, { key: 11, name: 'Chris V.' }, { key: 12, name: 'Peter D.' }];


ReactDOM.render(<PlayerBox data={players}/>, document.getElementById('player-box'))
ReactDOM.render(<Calendar />, document.getElementById('main-cal'))
