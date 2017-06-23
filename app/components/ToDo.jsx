const React = require('react');

const ToDo = React.createClass({
	onClickEvent: function (id) {
		var id = this.props.id;
		this.props.onToggle(id);
	},
	render: function () {
		let {id, text, completed} = this.props;
		return (
			<div onClick={this.onClickEvent}>
				<input type="checkbox" checked={completed}/> {text}
			</div>
		)
	}
});

module.exports = ToDo;
