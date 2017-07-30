const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			let action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			
			let res = reducers.searchTextReducer(df(''), df(action));
			
			expect(res).toEqual(action.searchText);
		});
	});
	describe('showCompleteReducer', () => {
		it('should show complete', () => {
			let action = {
				type: 'SET_COMPLETED'
			};
			
			let res = reducers.showCompletedReducer(df(false), df(action));
			
			expect(res).toEqual(true);
		});
	});
	
	describe('todoReducer', () => {
		it ('add a new todo', () => {
			let action = {
				type: 'ADD_TODO',
				text: 'add to do'
			}
			let res = reducers.todosReducer(df([]), df(action));
			
			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		}) 
		it ('should toggle todo', () => {
			let todos = [{
				id: '123',
				text: 'some text',
				completed:true,
				createdAt : 123,
				completeddAt : 125
			}];
			let action = {
				type: 'TOOGLE_TODO',
				id: '123'
			};
			let res = reducers.todosReducer(df(todos), df(action));
			
			expect(res[0].completed).toEqual(false);
			expect(res[0].completeddAt).toEqual(undefined);
		}) 
	});
})