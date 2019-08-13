import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Result from './result.js'
import Button from 'react-bootstrap/Button'

export class Results extends Component {
    constructor(props){
        super(props)
    }

    linkToNewCompany = () => {
        this.props.history.push("/companies/new")
    }

    render() {
        
        return (
            <>
            <div id="results-container-grid">
                <div id="results-container">
                    {
                        this.props.searchResults.map(element => {
                            return <Result result={element}/>
                        })
                    }
                    
                </div>
                <div id="new-company" className="container">
                    <p>Don't see what you're looking for?</p>
                    <Button onClick={this.linkToNewCompany}>Add New Company</Button>
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(Results);
