import React from 'react';
import ReactDOM from 'react-dom';
import Agent from './components/agent.jsx';

window.onload = function(){
	ReactDOM.render(
		React.createElement(Agent),
		document.getElementById('main')
	)
}