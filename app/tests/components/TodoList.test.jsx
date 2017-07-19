const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDoList = require('ToDoList');
const ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });
  
  
  it('should render one todo component to one todo items', () => {
  	const todos = [{
  			id: 1,
  			text: 'Testing 1'
		}, {
			id: 2,
			text: 'Testing 2'
		}];
  	
  	const todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
  	// How many components is in our list
  	const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

  	// Expects the length of our objects in todo's are equal to our dummy data
  	expect(todosComponents.length).toBe(todos.length);
  })
  
    it('should render todo message with no todos', () => {
    	const todos = [];
	  	const todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
	  	const $el = $(ReactDOM.findDOMNode(todoList));
	  	
	  	expect($el.find('.container__message').length).toBe(1);
	})
});
