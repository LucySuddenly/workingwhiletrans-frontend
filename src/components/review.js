import React, { Component } from 'react';

class Review extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>   
                <h3>{this.props.review.title}</h3>
                <h6>{this.props.review.job_title}</h6>
                <h4>{this.props.review.rating}</h4>
                <p>{this.props.review.body}</p>
            </div>
        );
    }
}

export default Review;
