import React, { Component } from 'react';
import StarRatings from 'react-star-ratings'
import {withRouter} from 'react-router';

class Review extends Component {
    constructor(props){
        super(props)
    }

    linkToReviewShow = (e) => {
        this.props.history.push(`/reviews/${e.currentTarget.id}`)
    }
    render() {
        return (
            <div onClick={(e) => this.linkToReviewShow(e)} id={this.props.review.id} className="review container">   
                <h3>{this.props.review.title}</h3>
                <h6>{this.props.review.job_title}</h6>
                <StarRatings starRatedColor="gold" rating={this.props.review.rating}/>
                <p>{this.props.review.body}</p>
            </div>
        );
    }
}

export default withRouter(Review);
