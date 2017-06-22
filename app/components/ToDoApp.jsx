const React = require('react');
var ToDoList = require('ToDoList');


const ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk The Dog'
				},{
					id: 2,
					text: 'Cut the grass'
				},{
					id: 3,
					text: 'Move the couch'
				},{
					id: 4,
					text: 'Clean the kitchen'
				}
			]
		};
	},
  render: function() {
  	let {todos} = this.state;
  	return(
  		<div>
  			<ToDoList todos={todos}/>
  		</div>
  	)
  }
});

module.exports = ToDoApp;
