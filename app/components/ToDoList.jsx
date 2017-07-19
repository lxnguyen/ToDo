const React = require('react');
const ToDo = require('ToDo');

const ToDoList = React.createClass({
	render: function () {
		let {todos} = this.props;
		let renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="container__message">There is nothing To Do</p>
				)
			}
			return todos.map((todo) => {
				return(
					// Need a unique prop
					// Pass every attribute on an object
					// as a prop w/o explicating defining everything
					<ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				);
			});
		}
		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
});

module.exports = ToDoList;
