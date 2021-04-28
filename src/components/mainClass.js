import React from "react";
import userAPI from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";
import Searchbar from "./searchbar.jsx";
import UserList from "./userList";
import SpaceXList from "./spaceXList";

class mainClass extends React.Component {
  constructor() {
    super();
    this.state = {
      spaceXData: [],
      userData: [],
      searchText: "",
      filters: {
        users: true,
        spaceX: true,
        cats: true,
        countries: true,
        covid: true
      }
    };
  }
  componentDidMount() {
    userAPI.getRandomUserNames().then((response) => {
      this.setState({ userData: response.data.results });
    });
    spaceX.all().then((response) => {
      console.log("got spaceX", response.data);
      this.setState({ spaceXData: response.data });
    });
    cats.get100Cats().then((response) => {
      console.log("got random cat: ", response);
    });
    // countries.getCountries().then((response) => {
    //   console.log("got countries", response);
    // });
    // covid.getCurrentCovidStats().then((response) => {
    //   console.log("got covid", response);
    // });
    //add a comment
  }
  render() {
    return (
      <div className="App">
        <h1 className="text-center m-3">Search Bar</h1>
        <Searchbar
          searchText={this.state.searchText}
          filters={this.state.filters}
          setFilters={this.setFilters.bind(this)}
          onSearchChangeHandler={this.setSearchText.bind(this)}
        />
        <div className="accordion mx-3 mb-3" id="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="users">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseUsers"
                aria-expanded="true"
                aria-controls="collapseUsers"
              >
                Users
              </button>
            </h2>
            <div
              id="collapseUsers"
              className="accordion-collapse collapse show"
              aria-labelledby="users"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body py-0">
                <UserList
                  data={this.state.userData}
                  searchText={this.state.searchText}
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="spaceX">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSpaceX"
                aria-expanded="true"
                aria-controls="collapseSpaceX"
              >
                SpaceX
              </button>
            </h2>
            <div
              id="collapseSpaceX"
              className="accordion-collapse collapse show"
              aria-labelledby="spaceX"
              data-bs-parent="#accordion"
            >
              <div className="accordion-body py-0">
                <SpaceXList
                  data={this.state.spaceXData}
                  searchText={this.state.searchText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  setSearchText(value) {
    this.setState({ searchText: value });
  }

  setFilters(filters) {
    this.setState({ filters: filters });
  }
}

export default mainClass;
