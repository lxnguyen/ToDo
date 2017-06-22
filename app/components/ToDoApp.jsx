const React = require('react');
const ToDoList = require('ToDoList');
const AddTodo = require('AddToDo');
const ToDoSearch = require('ToDoSearch');

const ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchTodos: '',
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
  	handleSubmit: function (text) {
  		var todosArray = this.state.todos;
	  	var idArray = [];
  		for (var i =0; i < todosArray.length; i++) {
  			var id = todosArray[i].id;
  			idArray.push(id);
  		}
  		var newId = idArray.length+1;
  		todosArray.push({id: newId, text: text});
  		this.setState(todosArray);
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
			        <AddTodo onAddTodo={this.handleSubmit}/>
				</div>
			)
	}
});

module.exports = ToDoApp;
