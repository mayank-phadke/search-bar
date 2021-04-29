import React from "react";

export default class UserList extends React.Component {
	render() {
		let filteredData = this.props.data
			.filter((item) => {
				return (
					(item.name.first + " " + item.name.last)
						.toLowerCase()
						.includes(this.props.searchText.toLowerCase()) ||
					item.email
						.toLowerCase()
						.includes(this.props.searchText.toLowerCase()) ||
					item.phone
						.toLowerCase()
						.includes(this.props.searchText.toLowerCase())
				)
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
							<div className="list-group-item d-block" key={index}>
								<div className="row">
									<div className="col-auto">
										<img className="img-fluid" style={{ borderRadius: "50%" }} src={item.picture.medium} />
									</div>
									<div className="col">
										<div className="row">
											<div className="col">
												{item.name.first} {item.name.last}
												<a
													className="mx-3 btn btn-sm btn-secondary-outline"
													target="_blank"
													href={
														"https://www.google.com/maps/search/?api=1&query=" +
														item.location.coordinates.latitude +
														"," +
														item.location.coordinates.longitude}>
													<i className="fas fa-map-marked-alt"></i>
												</a>
											</div>
										</div>
										<div className="row">
											<div className="col small">
												<a href={"mailto:" + item.email} target="_blank">{item.email}</a>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="row">
											<div className="col text-nowrap">
												<i class="fas fa-birthday-cake me-2"></i>
												{new Date(item.dob.date).toLocaleDateString()}
											</div>
											<div className="col text-end text-nowrap">
												<i class="fas fa-phone me-2"></i>
												{item.phone}
											</div>
										</div>
									</div>
								</div>
							</div>
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
