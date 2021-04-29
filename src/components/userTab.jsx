import React from "react";
import Searchbar from "./searchbar"
import UserList from "./userList"
import userAPI from "../APIs/user";

export default class UserTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            data: []
        }
    }

    componentDidMount() {
        userAPI.getRandomUserNames().then((response) => {
            console.log("Got Users", response.data.results);
            this.setState({ data: response.data.results });
        }).catch((err) => {
            console.error("Users Failed", err);
        });
    }

    render() {
        return (
            <div>
                <div className="alert alert-info m-3 mb-0">The list shows random users fetched from <a href="https://randomuser.me/" target="_blank">randomuser.me</a> API. Search by Name, email address or contact number. Click on the map to open their location on google maps. Click on email to send an email using your default email provider.</div>
                <Searchbar
                    searchText={this.state.searchText}
                    onSearchChangeHandler={this.setSearchText.bind(this)}
                />
                <UserList
                    data={this.state.data}
                    searchText={this.state.searchText}
                />
            </div>
        )
    }

    setSearchText(value) {
        this.setState({ searchText: value });
    }
}