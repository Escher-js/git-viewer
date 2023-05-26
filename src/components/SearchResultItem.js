// components/SearchResultItem.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SearchResultItem = ({ title, abstract, author }) => {
    return (
        <ListGroup.Item>
            <h5>{title}</h5>
            <p style={{ color: 'gray' }}>{abstract}</p>
            <p>{author}</p>
        </ListGroup.Item>
    );
};

export default SearchResultItem;
