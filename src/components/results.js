import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Result from './result.js'

export class Results extends Component {
    constructor(props){
        super(props)
    }

    render() {
        
        return (
            <div id="results-container-grid">
                <div id="results-container">
                    {
                        this.props.searchResults.map(element => {
                            return <Result result={element}/>
                        })
                    }
                    
                </div>
            </div>
        );
    }
}

export default withRouter(Results);
