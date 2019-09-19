import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

export class editCompany extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "",
            website: "",
            image_url: "",
            description: ""
        }
        this.fetchCompanyData()
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    fetchCompanyData = () => {
        fetch(`https://working-while-trans-backend.herokuapp.com/companies/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({
            name: json.company.name,
            website: json.company.website,
            image_url: json.company.image_url,
            description: json.company.description
        }))
    }

    submitForm = (ev) => {
        ev.preventDefault()
        fetch(`https://working-while-trans-backend.herokuapp.com/companies/${this.props.match.params.id}`, {
          method: "PATCH",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.message) {
                toaster.notify(json.message, {duration: 3000})
              } else {
                  this.props.history.push(`/companies/${json.id}`)
                }})
    }

    render() {
        return (
            <div id="new-company-form" className="container">
            <Form onSubmit={(ev)=> this.submitForm(ev)}>
                <Form.Label>Company Name</Form.Label>
                <FormControl value={this.state.name} onChange={(ev) => this.onTextFormChange(ev)} name="name" type="text" placeholder="Company Name"/>
                <Form.Label>Company Website URL</Form.Label>
                <FormControl value={this.state.website} onChange={(ev) => this.onTextFormChange(ev)} name="website" type="text" placeholder="Company Website URL"/>
                <Form.Label>Company Logo Image URL</Form.Label>
                <FormControl value={this.state.image_url} onChange={(ev) => this.onTextFormChange(ev)} name="image_url" type="text" placeholder="Company Logo Image URL"/>
                <Form.Label>Company Description</Form.Label>
                <FormControl value={this.state.description} onChange={(ev) => this.onTextFormChange(ev)} name="description" type="text" placeholder="Company Description"/>
                <Button variant="primary" type="submit">Edit Company</Button>
            </Form>
        </div>
        );
    }
}

export default withRouter(editCompany);
