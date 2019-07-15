import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';

class Search extends Component {
    constructor(){
        super()
        this.state={
            searchForm: ""
        }
    }

    submitSearch = (ev) => {
        ev.preventDefault()
        fetch("http://localhost:3000/search", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json["none"]) {
                this.props.history.push(`/companies/new`)
            } else {
                this.props.history.push(`/companies/${json.id}`)
            }
        })
    }

    searchFieldChange = (ev) => {
        this.setState({
            [ev.target.name]: [ev.target.value]
        })
    }

    render() {
        return (
            <div id = "SearchDiv">
                <Form onSubmit={(ev) => this.submitSearch(ev)}>
                    <FormControl name="searchForm" type="text" placeholder="Search for companies to review" onChange={(ev) => this.searchFieldChange(ev)}/>
                    <Button type="submit">Search</Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(Search);
