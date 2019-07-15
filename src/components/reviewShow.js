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

    render() {
        return (
            <div>
                <a href={`/companies/${this.state.review.company.id}`} ><h1>{this.state.review.company.name}</h1></a>
                <img src={this.state.review.company.image_url}/>
                <h3>{this.state.review.title}</h3>
                <h6>{this.state.review.job_title}</h6>
                <StarRatings starRatedColor="gold" rating={this.state.review.rating}/>
                <p>{this.state.review.body}</p>
            </div>
        );
    }
}

export default withRouter(ReviewShow);
