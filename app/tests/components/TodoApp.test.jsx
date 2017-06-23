const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
	it('should exist', () => {
		expect(ToDoApp).toExist();
	});
  	
  	it('should add todo onAddToDo hand;e', () => {
  		const todoText = '';
  		const todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
  		
  		todoApp.setState({todos: []});
  		todoApp.handleAddToDo(todoText);
  		
  		expect(todoApp.state.todos[0].text).toBe(todoText);
  	});
  
});
