import React, { Component } from 'react';
import {withRouter} from 'react-router';

class CompanyShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            company: {
                name: null,
                website: null,
                image_url: null,
                description: null
            }
        }
        this.fetchShowData()
    }

    fetchShowData = () => {
        fetch(`http://localhost:3000/companies/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({
            company: json
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.company.name}</h1>
                <a href={this.state.company.website}>{this.state.company.website}</a>
                <img src={this.state.company.image_url}/>
                <p>{this.state.company.description}</p>
            </div>
        );
    }
}

export default withRouter(CompanyShow);
