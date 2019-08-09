import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Review from './review.js'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import StarRatings from 'react-star-ratings'

class CompanyShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            company: {
                id: null,
                name: null,
                website: null,
                image_url: null,
                description: null,
                reviews: []
            },
            ratings_average: 0,
            title: "",
            job_title: "",
            body: "",
            rating: "",
            showForm: false
        }
        this.fetchShowData()
    }

    fetchShowData = () => {
        fetch(`http://localhost:3000/companies/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({
            company: json.company,
            ratings_average: json.ratings_average
        }))
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    
    submitForm = (ev) => {
        let review = {...this.state} 
        delete review["company"]
        review["company_id"] = this.state.company.id
        ev.preventDefault()
        fetch("http://localhost:3000/reviews", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({review})
        })
        .then(resp => resp.json())
        .then(json => {
            if (json["message"]) {
                // add toasted notes message
            } else {
                this.props.history.push(`/reviews/${json.id}`)
            }
        })
    }

    showOrHideForm = () => {
        if (this.state.showForm == false) {
            document.getElementById("new-review-hidden").id = "new-review"
            document.getElementById("review-container-hidden").id = "review-container"
            this.setState(
                {showForm: true}
            )
        } else {
            document.getElementById("new-review").id = "new-review-hidden"
            document.getElementById("review-container").id = "review-container-hidden"
            this.setState(
                {showForm: false}
            )
        }
    }

    render() {
        return (
            <div id="container">
            <div id="company-display-container">
                <div id="company-display">
                    <p id="company-name">{this.state.company.name}</p>
                    <StarRatings starRatedColor="gold" rating={this.state.ratings_average}/>({`${this.state.company.reviews.length}`})<br/>
                    <a href={this.state.company.website}>{this.state.company.website}</a>
                    <div id="company-img">
                    <img src={this.state.company.image_url}/>
                    </div>
                    <p>{this.state.company.description}</p>
                    <button onClick={this.showOrHideForm}>Add Review</button>
                </div>
            </div>
                <div id="new-review-hidden">
                    <Form onSubmit={(ev)=> this.submitForm(ev)}>
                            <Form.Label>Title of Review</Form.Label>
                            <FormControl value={this.state.title} onChange={(ev) => this.onTextFormChange(ev)} name="title" type="text" placeholder="Title of Review"/>
                            <Form.Label>Your Job Title</Form.Label>
                            <FormControl value={this.state.job_title} onChange={(ev) => this.onTextFormChange(ev)} name="job_title" type="text" placeholder="Your Job Title"/>
                            <Form.Label>Review</Form.Label>
                            <FormControl value={this.state.body} onChange={(ev) => this.onTextFormChange(ev)} name="body" as="textarea" placeholder="Your Review" rows="5"/>
                            <Form.Label>Company Description</Form.Label>
                            <FormControl value={this.state.rating} onChange={(ev) => this.onTextFormChange(ev)} name="rating" type="number" placeholder="Rating from 1-5"/>
                            <Button variant="primary" type="submit">Submit New Review</Button>
                    </Form>
                </div>
            <div id="review-container-hidden">
                {this.state.company.reviews.map(review => {
                    return <Review review={review} />
                })}
            </div>
            </div>
        );
    }
}

export default withRouter(CompanyShow);
