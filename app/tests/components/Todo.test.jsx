const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const ToDo = require('ToDo');

describe('ToDo', () => {
	it('should exist', () => {
		expect(ToDo).toExist();
	});

	it('props called successfully when someone clicks the item', () => {
		const todoData= {
			id: 2,
			text: 'testing todos',
			completed: false,
		};
		const spy = expect.createSpy();
		const todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy}/>);
	    const $el = $(ReactDOM.findDOMNode(todo));
		
	    TestUtils.Simulate.click($el[0]);
	    expect(spy).toHaveBeenCalledWith(2);
	});
});
