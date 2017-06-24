const $ = require('jquery');

module.exports = {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function() {
		let stringsTodos = localStorage.getItem('todos');
		let todos = [];
		
		//JSON will fail if the data is invalid
		try {
			todos = JSON.parse(stringsTodos);
		} catch (e){
		
		}		
		return $.isArray(todos) ? todos : [];		
	},
	filterTodos: function(todos, showCompleted, searchToDos) {
		let filteredTodos = todos;

		// Filter by ShowCompleted
		filteredTodos = filteredTodos.filter((todos) => {
			return !todos.completed || showCompleted;
		});
		// Filter by search todos
		
		// Sort with non-completed to the top
		return filteredTodos;
	}
};