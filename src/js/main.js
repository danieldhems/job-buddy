import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application';

window.onload = function(){
	ReactDOM.render(
		React.createElement(Application),
		document.getElementById('main')
	)
}