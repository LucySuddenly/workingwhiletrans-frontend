import React, { Component } from 'react';
import {withRouter} from 'react-router';

export class Result extends Component {
    constructor(props){
        super(props)
    }

    linkToCompanyShow = (e) => {
        this.props.history.push(`/companies/${e.currentTarget.id}`)
    }

    render() {
        return (
            <div className="container search-result" id={this.props.result.id} onClick={(e) => this.linkToCompanyShow(e)}>
                    <h2>{this.props.result.name}</h2>
                    <div className="image-container">
                    <img src={this.props.result.image_url}/>
                    </div>
            </div>
        );
    }
}

export default withRouter(Result);
