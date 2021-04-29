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