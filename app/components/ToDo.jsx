const React = require('react');
const moment = require('moment');

const ToDo = React.createClass({
	onClickEvent: function (id) {
		var id = this.props.id;
		this.props.onToggle(id);
	},
	render: function () {
		let {id, text, completed, createdAt, completeddAt} = this.props;
		let todoClassName = completed ? 'todo todo-completed' : 'todo'
		let renderDate = () => {
			let message = 'Created: ';
			let timeStamp = createdAt;
			
			if (completed) {
				message = 'Completed: ';
				timeStamp = completeddAt;
			}
			
			return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm:ss a');
		}
		return (
			<div className={todoClassName} onClick={this.onClickEvent}>
				<div>
					<input type="checkbox" checked={completed}/>
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		)
	}
});

module.exports = ToDo;
