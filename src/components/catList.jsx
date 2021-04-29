import React from "react";

export default class CatList extends React.Component {
    
    render() {
        let total = this.props.data.length
        let index1 = total / 3
        let index2 = total * 2 / 3
        return (
            <div className="row gx-3">
                <div className="col-4 text-center">
                    {this.props.data
                        .slice(0, index1)
                        .map((item, i) => {
                            return (
                                <a key={i} href={item.url} target="_blank">
                                    <img className="img-fluid my-2" src={item.url}/>
                                </a>
                            );
                        })}
                </div>
                <div className="col-4 text-center">
                    {this.props.data
                        .slice(index1, index2)
                        .map((item, i) => {
                            return (
                                <a key={i} href={item.url} target="_blank">
                                    <img className="img-fluid my-2" src={item.url}/>
                                </a>
                            );
                        })}
                </div>
                <div className="col-4 text-center">
                    {this.props.data
                        .slice(index2)
                        .map((item, i) => {
                            return (
                                <a key={i} href={item.url} target="_blank">
                                    <img className="img-fluid my-2" src={item.url}/>
                                </a>
                            );
                        })}
                </div>
            </div>
        );
    }
}
