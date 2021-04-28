import React from "react";

export default class FilterDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.defaultFilters
    };

    this.dropdownRef = React.createRef();
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="button-addon2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          ref={this.dropdownRef}
        >
          <i className="fas fa-filter"></i>
        </button>
        <ul className="dropdown-menu pb-0" onClick={(e) => {}}>
          <li
            className="dropdown-item user-select-none"
            onClick={(e) => {
              this.changeFilter("users", !this.state.filter.users, e);
            }}
          >
            <input
              onChange={() => {}}
              type="checkbox"
              checked={this.state.filter.users}
            ></input>{" "}
            <label>Users</label>
          </li>
          <li
            className="dropdown-item user-select-none"
            onClick={(e) => {
              this.changeFilter("spaceX", !this.state.filter.spaceX, e);
            }}
          >
            <input
              onChange={() => {}}
              type="checkbox"
              checked={this.state.filter.spaceX}
            ></input>{" "}
            <label>SpaceX</label>
          </li>
          <li
            className="dropdown-item user-select-none"
            onClick={(e) => {
              this.changeFilter("cats", !this.state.filter.cats, e);
            }}
          >
            <input
              onChange={() => {}}
              type="checkbox"
              checked={this.state.filter.cats}
            ></input>{" "}
            <label>Cats</label>
          </li>
          <li
            className="dropdown-item user-select-none"
            onClick={(e) => {
              this.changeFilter("countries", !this.state.filter.countries, e);
            }}
          >
            <input
              onChange={() => {}}
              type="checkbox"
              checked={this.state.filter.countries}
            ></input>{" "}
            <label>Countries</label>
          </li>
          <li
            className="dropdown-item user-select-none"
            onClick={(e) => {
              this.changeFilter("covid", !this.state.filter.covid, e);
            }}
          >
            <input
              onChange={() => {}}
              type="checkbox"
              checked={this.state.filter.covid}
            ></input>{" "}
            <label>Covid</label>
          </li>
          <div className="d-grid gap-2 mt-2">
            <div
              className="btn btn-sm btn-primary"
              onClick={() => {
                this.props.setFilters(this.state.filter);
              }}
            >
              Apply
            </div>
          </div>
        </ul>
      </div>
    );
  }

  changeFilter(type, value, event) {
    event.stopPropagation();
    let newFilter = this.state.filter;
    switch (type) {
      case "users":
        newFilter.users = value;
        break;
      case "spaceX":
        newFilter.spaceX = value;
        break;
      case "cats":
        newFilter.cats = value;
        break;
      case "countries":
        newFilter.countries = value;
        break;
      case "covid":
        newFilter.covid = value;
        break;
      default:
        break;
    }

    this.setState({ filter: newFilter });
  }
}
