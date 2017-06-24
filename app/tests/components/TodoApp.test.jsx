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
  	
  	it('should add todo onAddToDo handle', () => {
  		const todoText = '';
  		const todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
  		
  		todoApp.setState({todos: []});
  		todoApp.handleAddToDo(todoText);
  		
  		expect(todoApp.state.todos[0].text).toBe(todoText);
  		// Expect createAt to be a number
  		expect(todoApp.state.todos[0].createdAt).toBeA('number');
  	});
  
  	it('should handleToggle when called', () => {
  		const todoData = {
  			id: 11,
  			text: 'testing',
  			completed: false,
  			createdAt: 0,
  			completeddAt: undefined
  		};
  		const todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
  		
  		todoApp.setState({todos: [todoData]});
  		
  		expect(todoApp.state.todos[0].completed).toBe(false);
  		todoApp.handleToggle(11);
  		expect(todoApp.state.todos[0].completed).toBe(true);
  		// Expect completedAT to be a number
  		expect(todoApp.state.todos[0].completeddAt).toBeA('number');
  	});
	
  	it('should move todo from completed to incomplete', () => {
  		const todoData = {
  			id: 11,
  			text: 'testing',
  			completed: true,
  			createdAt: 0,
  			completeddAt: 1234
  		};
  		const todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
  		
  		todoApp.setState({todos: [todoData]});
  		
  		expect(todoApp.state.todos[0].completed).toBe(true);
  		todoApp.handleToggle(11);
  		expect(todoApp.state.todos[0].completed).toBe(false);
  		// Write a function where completed is false
  		expect(todoApp.state.todos[0].completeddAt).toBe(undefined);
  	});
	
});
