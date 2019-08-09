import React, { Component } from 'react';
import StarRatings from 'react-star-ratings'

class Review extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="review container">   
                <a href={`/reviews/${this.props.review.id}`}><h3>{this.props.review.title}</h3></a>
                <h6>{this.props.review.job_title}</h6>
                <StarRatings starRatedColor="gold" rating={this.props.review.rating}/>
                <p>{this.props.review.body}</p>
            </div>
        );
    }
}

export default Review;
