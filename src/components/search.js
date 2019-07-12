import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Search extends Component {
    render() {
        return (
            <div id = "SearchDiv">
                <Form>
                    <FormControl name="search" type="text" placeholder="Search for companies to review"/>
                    <Button type="submit">Search</Button>
                </Form>
            </div>
        );
    }
}

export default Search;
