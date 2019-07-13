import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';

class NewCompany extends Component {
    constructor(){
        super()
        this.state={
            name: "",
            website: "",
            image_url: "",
            description: ""
        }
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submitForm = (ev) => {
        ev.preventDefault()
        fetch("https://transfundr-backend.herokuapp.com/beacons", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => {console.log(json)
            
        })
    }

    render() {
        return (
            <div>
                <div>
                <h3>Your search returned no results, chances are the company you searched for just isn't in our database yet. Create your company below!</h3>
                </div>
                <Form onSubmit={(ev)=> this.submitForm(ev)}>
                    <Form.Label>Company Name</Form.Label>
                    <FormControl value={this.state.name} onChange={(ev) => this.onTextFormChange(ev)} name="name" type="text" placeholder="Company Name"/>
                    <Form.Label>Company Website URL</Form.Label>
                    <FormControl value={this.state.website} onChange={(ev) => this.onTextFormChange(ev)} name="website" type="text" placeholder="Company Website URL"/>
                    <Form.Label>Company Logo Image URL</Form.Label>
                    <FormControl value={this.state.image_url} onChange={(ev) => this.onTextFormChange(ev)} name="image_url" type="text" placeholder="Company Logo Image URL"/>
                    <Form.Label>Company Description</Form.Label>
                    <FormControl value={this.state.description} onChange={(ev) => this.onTextFormChange(ev)} name="description" type="text" placeholder="Company Description"/>
                    <Button variant="primary" type="submit">Make New Company</Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(NewCompany);
