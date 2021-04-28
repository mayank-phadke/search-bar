import React from "react";
import FilterDropdown from "./filterDropdown";

export default class Searchbar extends React.Component {
  render() {
    return (
      <div className="p-3 sticky-top bg-white">
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
          <FilterDropdown
            defaultFilters={this.props.filters}
            setFilters={this.props.setFilters}
          />
        </div>
      </div>
    );
  }
}
