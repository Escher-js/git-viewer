// Sidebar.js
import React from 'react';
import { Col, Form, Button, ListGroup } from 'react-bootstrap';
import SearchResultItem from './SearchResultItem';

const Sidebar = () => {
    // Dummy data for demonstration
    const searchResults = [
        { title: 'Repo 1', abstract: 'This is a repository.', author: 'Author 1' },
        { title: 'Repo 2', abstract: 'This is another repository.', author: 'Author 2' },
        // ...
    ];

    return (
        <Col xs={12} md={4}>
            <Form>
                <Form.Control type="text" placeholder="Search..." />
                <Button type="submit">Search</Button>
            </Form>
            <ListGroup>
                {searchResults.map((result, index) => (
                    <SearchResultItem key={index} {...result} />
                ))}
            </ListGroup>
        </Col>
    );
};

export default Sidebar;
