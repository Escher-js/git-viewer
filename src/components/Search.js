import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ({ searchQuery, setSearchQuery, onSearch }) => {
    const handleSearch = () => {
        onSearch();
    };

    return (
        <Form>
            <Form.Control
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search input"
            />
            <Button type="button" onClick={handleSearch}>Search</Button>
        </Form>
    );
};

export default Search;
