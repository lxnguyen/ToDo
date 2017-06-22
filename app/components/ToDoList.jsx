const React = require('react');
const ToDo = require('ToDo');

const ToDoList = React.createClass({
	render: function () {
		let {todos} = this.props;
		let renderTodos = () => {
			return todos.map((todo) => {
				return(
					// Need a unique prop
					// Pass every attribute on an object
					// as a prop w/o explicating defining everything
					<ToDo key={todo.id} {...todo}/>
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
