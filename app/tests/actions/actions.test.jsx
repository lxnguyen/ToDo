const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
	it('should generate search text action', () => {
		let action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		}
		let res = actions.setSearchText(action.searchText);
		
		expect(res).toEqual(action);
	})
	
	it('should toggle a show completed', () => {
	
		let action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		
		let res = actions.toggleShowCompleted();
		
		expect(res).toEqual(action);
	});
	
	it('should generate add todo action', () => {
		let action = {
			type: 'ADD_TODO',
			text: 'Something to do'
		}
		
		let res = actions.addToDo(action.text);
		
		expect(res).toEqual(action);
	});
	
	it('should generate toggle todo', () => {
		let action = {
			type: 'TOGGLE_TODO',
			id: 'Some ID'
		}
		
		let res = actions.toggleTodo(action.id)
		
		expect(res).toEqual(action);
	});
});