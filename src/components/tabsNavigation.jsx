import React from "react";

export default class TabsNavigation extends React.Component {

    constructor(props) {
        super(props)
        this.setSource.bind(this)

        this.sourceList = [
            "Users",
            "SpaceX",
            "Cats",
            "Countries"
        ]
    }

    render() {
        return (
            <ul className="sticky-top bg-white nav nav-tabs nav-fill mx-3">
                {
                    this.sourceList.map((source, i) => {
                        return (
                            <li
                                key={i}
                                className="nav-item"
                                onClick={() => {
                                    this.setSource(source)
                                }}
                            >
                                {
                                    this.props.source == source ?
                                        <a className="nav-link active bg-primary text-white">{source}</a> :
                                        <a className="nav-link">{source}</a>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    setSource(source) {
        this.props.setSourceHandler(source);
    }
}