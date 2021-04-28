import React from "react";

export default class UserList extends React.Component {
  render() {
    return (
      <ul className="fs-5 list-group list-group-flush">
        {this.props.data
          .filter((item) => {
            return (item.name.first + " " + item.name.last)
              .toLowerCase()
              .includes(this.props.searchText.toLowerCase());
          })
          .sort(this.sortByName)
          .map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                {item.name.first} {item.name.last}
              </li>
            );
          })}
      </ul>
    );
  }

  sortByName(a, b) {
    var nameA = (a.name.first + " " + a.name.last).toLowerCase(); // ignore upper and lowercase
    var nameB = (b.name.first + " " + b.name.last).toLowerCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }
}
