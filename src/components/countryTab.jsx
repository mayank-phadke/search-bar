import React from "react";
import Searchbar from "./searchbar"
import CountryList from "./countryList"
import countries from "../APIs/countries";

export default class CountryTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            data: []
        }
    }

    componentDidMount() {
        countries.getCountries().then((response) => {
            console.log("Got Countries", response);
            this.setState({data: response.data})
          }).catch((err) => {
            console.error("Countries Failed", err);
        });
    }

    render() {
        return (
            <div>
                <div className="alert alert-info m-3 mb-0">A list of all countries fetched form <a href="https://restcountries.eu/" target="_blank">restcountries.eu</a>. Click on any flag to view the original image. Click on the map button to view the country in google maps.</div>
                <Searchbar
                    searchText={this.state.searchText}
                    onSearchChangeHandler={this.setSearchText.bind(this)}
                />
                <CountryList
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