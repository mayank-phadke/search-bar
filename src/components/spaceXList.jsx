import React from "react";

export default class SpaceXList extends React.Component {
	render() {
		let filteredData = this.props.data
			.filter((item) => {
				return item.name
					.toLowerCase()
					.includes(this.props.searchText.toLowerCase());
			})

		if (filteredData.length == 0) {
			return (
				<div className="text-center mt-5">No Results</div>
			)
		}

		return (
			<ul className="fs-5 list-group list-group-flush">
				{filteredData
					.sort(this.sortByName)
					.map((item, index) => {
						return (
							<div className="list-group-item" key={index}>
								<div className="row">
									<div className="col">
										{item.name}
									</div>
									<div className="col text-end">
										{
											item.links.article ?
												<a target="_blank" className="btn btn-outline-primary mx-1" href={item.links.article}>
													<i className="fas fa-external-link-alt" />
												</a> : ""
										}
										{
											item.links.wikipedia ?
												<a target="_blank" className="btn btn-outline-secondary mx-1" href={item.links.wikipedia}>
													<i className="fab fa-wikipedia-w" />
												</a> : ""
										}
										{
											item.links.webcast ?
												<a target="_blank" className="btn btn-outline-danger mx-1" href={item.links.webcast}>
													<i className="fab fa-youtube"></i>
												</a> : ""
										}
									</div>
								</div>
							</div>
						);
					})}
			</ul>
		);
	}

	sortByName(a, b) {
		var nameA = a.name.toLowerCase(); // ignore upper and lowercase
		var nameB = b.name.toLowerCase(); // ignore upper and lowercase
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
