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
	filterTodos: function(todos, showCompleted, searchTodos) {
		let filteredTodos = todos;

		// Filter by ShowCompleted
		filteredTodos = filteredTodos.filter((todos) => {
			return !todos.completed || showCompleted;
		});

		// Filter by search todos
		filteredTodos = filteredTodos.filter((todos) => {
			const text = todos.text.toLowerCase();
			return searchTodos.length === 0 || text.indexOf(searchTodos) > -1;
		});
		// Sort with non-completed to the top
		filteredTodos.sort((a, b) => {
			if (a.completed && b.completed) {
				// a should go before b
				return -1;
			} else if (a.completed && !b.completed) {
				// a should come before b
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;
	}
};