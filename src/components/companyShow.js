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
                
            </div>
        );
    }
}

export default withRouter(CompanyShow);
