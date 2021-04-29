import React from "react";
import CatList from "./catList"
import cats from "../APIs/cats";

export default class UserTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        cats.get100Cats().then((response) => {
            console.log("Got Cats: ", response.data);
            this.setState({ data: response.data })
        }).catch((err) => {
            console.error("Cats Failed", err);
        });
    }

    render() {
        return (
            <div>
                <div className="alert alert-info m-3 mb-0">CATS!!! ❤️. Data fetched from <a href="https://thecatapi.com/" target="_bank">thecatapi.com</a>. Click on any image to view the original.</div>
                <CatList
                    data={this.state.data}
                />
            </div>
        )
    }
}