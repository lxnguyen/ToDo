const React = require('react');

const ToDoSearch = React.createClass({
	onHandleSearch: function() {
		let showCompleted = this.refs.showCompleted.checked;
		let searchTodos = this.refs.searchTodos.value;
		
		this.props.onSearch(showCompleted, searchTodos);
	},
	render: function () {
		return (
			<div>
				<div>
					<input type="search" ref="searchTodos" placeholder="Search ToDos" onChange={this.handleSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" placeholder="Search ToDos" onChange={this.handleSearch}/>
						Show Completed
					</label>
				</div>
			</div>
		);
	}
});

module.exports = ToDoSearch;
