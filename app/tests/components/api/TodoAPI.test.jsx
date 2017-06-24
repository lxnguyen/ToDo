const expect = require('expect');

const ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});
	it('should exist', () => {
		expect(ToDoAPI).toExist();
	});
	describe('Set Todos', () => {
		// Data is an array
		it('should set todos array', () => {
			const todos = [{
				id: 23,
				text: 'test all files',
				completed: false
			}];
			ToDoAPI.setTodos(todos);
			
			const actualTodos = JSON.parse(localStorage.getItem('todos'));
			// .toEqual compares the values on the objects and arrays
			expect(actualTodos).toEqual(todos);
		})
		it('should not set invalid todos to array', () => {
			const invalidTodos = {
				id: 23,
				text: 'test all files',
				completed: false
			};
			ToDoAPI.setTodos(invalidTodos);
			const actualTodos = localStorage.getItem('todos');
			expect(actualTodos).toBe(null);
		})
	});
	describe('Get Todos', () => {
		it('should return empty array for bad localStorage data', () => {
			const actualTodos = ToDoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});
		it('should return todos if there is valid array in localStorage', () => {
			const todos = [{
				id: 23,
				text: 'test all files',
				completed: false
			}];
			
			localStorage.setItem('todos', JSON.stringify(todos));
			const actualTodos = ToDoAPI.getTodos();
			
			expect(actualTodos).toEqual(todos);
		})
	});
	describe('Filter Todos', () => {
		const todos = [{
			id: 1,
			text: 'test some files',
			completed: true
		},{
			id: 2,
			text: 'test all files',
			completed: false
		}, {
			id: 3,
			text: 'test some files',
			completed: true
		}];
		it('should return all items if showCompleted is true', () => {
			const filteredTodos = ToDoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})
		it('should return all items if showCompleted is false', () => {
			const filteredTodos = ToDoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		})
		it('should sort by completed status', () => {
			const filteredTodos = ToDoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		})
		it('should filter todos by searchTodos', () => {
			const filteredTodos = ToDoAPI.filterTodos(todos, true, 'all');
			expect(filteredTodos.length).toBe(1);
		})
		it('should return all todos if searchTodos is empty', () => {
			const filteredTodos = ToDoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})
	});
});
