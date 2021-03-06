const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const ToDoApp = require('ToDoApp');
const actions = require('actions');
const store = require('configStore').configure();

store.subscribe(() => {
	console.log('New State', store.getState());
});

store.dispatch(actions.addToDo('Finish this app'));
store.dispatch(actions.setSearchText('finish'))
store.dispatch(actions.toggleShowCompleted());


require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<ToDoApp/>
	</Provider>,
	document.getElementById('app')
);
