import React, { Component } from 'react';
import {withRouter} from 'react-router';
import StarRatings from 'react-star-ratings'

class ReviewShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            review: {
                title: null,
                job_title: null,
                body: null,
                rating: 0,
                company: {
                    name: null, 
                    id: 0,
                    image_url: null
                }
            }
        }
        this.fetchShowData()
    }

    fetchShowData = () => {
        fetch(`http://localhost:3000/reviews/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({
            review: json
        }))
    }

    linkToCompanyShow = () => {
        this.props.history.push(`/companies/${this.state.review.company.id}`)
    }

    render() {
        return (
            <div className="review container">
                <div id="company-link" onClick={this.linkToCompanyShow}>
                    <h1>{this.state.review.company.name}</h1>
                    <div className="image-container">
                    <img src={this.state.review.company.image_url}/>
                    </div>
                    <h3>{this.state.review.title}</h3>
                    <h6>{this.state.review.job_title}</h6>
                    <StarRatings starRatedColor="gold" rating={this.state.review.rating}/>
                    <p>{this.state.review.body}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(ReviewShow);
