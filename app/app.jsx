const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const ToDoApp = require('ToDoApp');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!applicationStyles');

ReactDOM.render(
	<ToDoApp/>,
	document.getElementById('app')
);
