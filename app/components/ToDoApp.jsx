const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

const ToDoList = require('ToDoList');
const AddTodo = require('AddToDo');
const ToDoSearch = require('ToDoSearch');
const ToDoAPI = require('ToDoAPI');

const ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchTodos: '',
			todos: ToDoAPI.getTodos()
		};
	},
	// Saving todo's
	componentDidUpdate: function() {
		ToDoAPI.setTodos(this.state.todos);
	},
  	handleAddToDo: function (text) {
  		this.setState({
  			todos: [
  				...this.state.todos,
  				{
  					id: uuid(),
  					text: text,
  					completed:false,
  					createdAt : moment().unix(),
  					completeddAt : undefined
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
  				todo.completeddAt = todo.completed ? moment().unix() : undefined;	
  			}
  			return todo;
  		});
  		this.setState({todos: updatedTodos});
  	},
	render: function() {
		let {todos, showCompleted, searchTodos} = this.state;
		let filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchTodos);
			return(
				<div>
					<h1 className="pageTitle">Todo</h1>
					<div className="row">
						<div className="column small-centered small-11 medium-6 large-5">
							<div className='container'>
								<ToDoSearch onSearch={this.handleSearch}/>
								<ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
								<AddTodo onAddTodo={this.handleAddToDo}/>
							</div>
						</div>
					</div>
				</div>
			)
	}
});

module.exports = ToDoApp;
