import React from "react";

export default class Searchbar extends React.Component {
	render() {
		return (
			<div className="p-3 bg-white">
				<div className="input-group">
					<input
						type="name"
						className="form-control"
						id="searchInput"
						placeholder="Search..."
						value={this.props.searchText}
						onChange={(e) => {
							this.props.onSearchChangeHandler(e.target.value);
						}}
					/>
				</div>
			</div>
		);
	}
}
