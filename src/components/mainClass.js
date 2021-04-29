import React from "react";
import UserTab from "./userTab";
import SpaceXTab from "./spaceXTab";
import TabNavigation from "./tabsNavigation";
import CatTab from "./catTab"
import CountryTab from "./countryTab";

class mainClass extends React.Component {
	constructor() {
		super();
		this.state = {
			spaceXData: [],
			userData: [],
			searchText: "",
			source: "Users"
		};
	}

	render() {
		return (
			<div className="App">
				<div className="bg-light">
					<h1 className="text-center p-3 mb-0">Search Bar</h1>
					<p className="text-center pb-3 mb-0">
						Developed By:
						<a href="http://mayank-phadke.github.io/" target="_blank" className="ms-1">Mayank Phadke</a>
					</p>
				</div>
				<TabNavigation
					source={this.state.source}
					setSourceHandler={this.setSource.bind(this)} />
				<div className="mx-3">
					{
						this.state.source == "Users" ?
							<UserTab /> : ""
					}
					{
						this.state.source == "SpaceX" ?
							<SpaceXTab /> : ""
					}
					{
						this.state.source == "Cats" ?
							<CatTab /> : ""
					}
					{
						this.state.source == "Countries" ?
							<CountryTab /> : ""
					}
				</div>
			</div>
		);
	}

	setSource(value) {
		this.setState({ source: value })
	}
}

export default mainClass;
