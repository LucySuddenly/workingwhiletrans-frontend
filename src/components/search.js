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
            this.props.updateSearchResults(json)
            this.props.history.push(`/results`)
        })
    }

    searchFieldChange = (ev) => {
        this.setState({
            [ev.target.name]: [ev.target.value]
        })
    }

    render() {
        return (
            <div id="search-container">
                <div id="search" className="container">
                    <Form onSubmit={(ev) => this.submitSearch(ev)} >
                        <div className="searchform" id="search-input">
                        <FormControl name="searchForm" type="text" placeholder="Search for companies to review" onChange={(ev) => this.searchFieldChange(ev)} />
                        </div>
                        <div className="searchform">
                        <Button type="submit">Search</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);
