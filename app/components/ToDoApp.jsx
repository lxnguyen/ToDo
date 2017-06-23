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
					text: 'Walk The Dog',
  					completed:true
				},{
					id: uuid(),
					text: 'Cut the grass',
  					completed:false
				},{
					id: uuid(),
					text: 'Move the couch',
  					completed:false
				},{
					id: uuid(),
					text: 'Clean the kitchen',
  					completed:true
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
  					text: text,
  					completed:false
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
  	handleToggle: function(id) {
  		let todos = this.state.todos;
  		let updatedTodos = this.state.todos.map((todo) => {
  			if (todo.id === id) {
  				todo.completed = !todo.completed;
  			}
  			return todo;
  		});
  		this.setState({todos: updatedTodos});
  	},
	render: function() {
		let {todos} = this.state;
			return(
				<div>
					<ToDoSearch onSearch={this.handleSearch}/>
					<ToDoList todos={todos} onToggle={this.handleToggle}/>
			        <AddTodo onAddTodo={this.handleAddToDo}/>
				</div>
			)
	}
});

module.exports = ToDoApp;
