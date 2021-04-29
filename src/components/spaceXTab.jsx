import React from "react";
import Searchbar from "./searchbar"
import SpaceXList from "./spaceXList"
import spaceX from "../APIs/spaceX";

export default class SpaceXTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            data: []
        }
    }

    componentDidMount() {
        spaceX.all().then((response) => {
			console.log("Got SpaceX", response.data);
			this.setState({ data: response.data });
		}).catch((err) => {
			console.error("SapceX Failed", err);
		});
    }

    render() {
        return (
            <div>
                <Searchbar
                    searchText={this.state.searchText}
                    onSearchChangeHandler={this.setSearchText.bind(this)} />
                <SpaceXList
                    data={this.state.data}
                    searchText={this.state.searchText} />
            </div>
        )
    }

    setSearchText(value) {
		this.setState({ searchText: value });
	}
}