const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
	it('should exist', () => {
		expect(ToDoSearch).toExist();
	});

	// Text gets change, props get called
	it('should call onSearch with entered input text', () => {
		var searchTodos = 'Dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

		todoSearch.refs.searchTodos.value = searchTodos;
		TestUtils.Simulate.change(todoSearch.refs.searchTodos);

		expect(spy).toHaveBeenCalledWith(false, 'Dog');
	});

	it('should call onSearch with proper checked value', () => {
		const spy = expect.createSpy();
		const todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, '');
  });
});
