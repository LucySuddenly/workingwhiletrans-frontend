import React, { Component } from 'react';

export class Result extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="container">
                <h2>{this.props.result.name}</h2>
            </div>
        );
    }
}

export default Result;
