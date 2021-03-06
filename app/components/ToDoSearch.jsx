const React = require('react');

const ToDoSearch = React.createClass({
	onHandleSearch: function() {
		let showCompleted = this.refs.showCompleted.checked;
		let searchTodos = this.refs.searchTodos.value;
		
		this.props.onSearch(showCompleted, searchTodos);
	},
	render: function () {
		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchTodos" placeholder="Search ToDos" onChange={this.onHandleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" placeholder="Search ToDos" onChange={this.onHandleSearch}/>
						Show Completed
					</label>
				</div>
			</div>
		);
	}
});

module.exports = ToDoSearch;
