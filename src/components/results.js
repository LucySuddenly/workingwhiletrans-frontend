import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Result from './result.js'

export class Results extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {
                this.props.searchResults.map(element => {
                    return <Result result={element}/>
                })
                }
                
            </div>
        );
    }
}

export default withRouter(Results);
