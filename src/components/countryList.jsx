import React from "react";

export default class CountryList extends React.Component {
    render() {
        let filteredData = this.props.data
            .filter((item) => {
                return (
                    item.name
                        .toLowerCase()
                        .includes(this.props.searchText.toLowerCase()) ||
                    item.nativeName
                        .toLowerCase()
                        .includes(this.props.searchText.toLowerCase()) ||
                    item.alpha3Code
                        .toLowerCase()
                        .includes(this.props.searchText.toLowerCase())
                )
            })

        if(filteredData.length == 0) {
            return(
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
                                    <div className="col-2">
                                        <img className="img-fluid" style={{
                                            width: "auto"
                                        }} src={item.flag} />
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col small">
                                                {item.nativeName}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col text-end">
                                        <a
                                            className="mx-3 btn btn-lg btn-primary"
                                            target="_blank"
                                            href={
                                                "https://www.google.com/maps/@?api=1&map_action=map&center=" +
                                                item.latlng[0] +
                                                "," +
                                                item.latlng[1] +
                                                "&zoom=6"}>
                                            <i className="fas fa-map-marked-alt"></i>
                                        </a>
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
