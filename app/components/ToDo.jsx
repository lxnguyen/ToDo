const React = require('react');
const moment = require('moment');

const ToDo = React.createClass({
	onClickEvent: function (id) {
		var id = this.props.id;
		this.props.onToggle(id);
	},
	render: function () {
		let {id, text, completed, createdAt, completeddAt} = this.props;
		let renderDate = () => {
			let message = 'Created ';
			let timeStamp = createdAt;
			
			if (completed) {
				message = 'Completed At';
				timeStamp = completeddAt;
			}
			
			return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm:ss a');
		}
		return (
			<div onClick={this.onClickEvent}>
				<input type="checkbox" checked={completed}/>
				<span>{text}</span>
				<p>{renderDate()}</p>
			</div>
		)
	}
});

module.exports = ToDo;
