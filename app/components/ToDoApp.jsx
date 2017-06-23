const React = require('react');
const ToDoList = require('ToDoList');
const AddTodo = require('AddToDo');
const ToDoSearch = require('ToDoSearch');
const uuid = require('node-uuid');

const ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchTodos: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk The Dog'
				},{
					id: uuid(),
					text: 'Cut the grass'
				},{
					id: uuid(),
					text: 'Move the couch'
				},{
					id: uuid(),
					text: 'Clean the kitchen'
				}
			]
		};
	},
  	handleAddToDo: function (text) {
  		this.setState({
  			todos: [
  				...this.state.todos,
  				{
  					id: uuid(),
  					text: text
  				}
  			]
  		});
  	},
  	handleSearch: function(showCompleted, searchTodos) {
  		this.setState({
  			showCompleted: showCompleted,
  			searchTodos: searchTodos.toLowerCase()
  		});
  	},
	render: function() {
		let {todos} = this.state;
			return(
				<div>
					<ToDoSearch onSearch={this.handleSearch}/>
					<ToDoList todos={todos}/>
			        <AddTodo onAddTodo={this.handleAddToDo}/>
				</div>
			)
	}
});

module.exports = ToDoApp;
