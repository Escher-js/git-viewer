import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './SearchResult.css'; // Assuming you have a CSS file for SearchResult

const truncate = (text, MaxletterCount) => {
    return text.length > MaxletterCount
        ? text.substring(0, MaxletterCount) + '...'
        : text
}

// fetchFiles function and result prop name corrected
const SearchResult = ({ result, fetchFiles }) => (
    <ListGroup>
        <div onClick={() => fetchFiles(result.id)}>
            <Card className="search-card">
                <Card.Img variant="top" src={result.imageUrl} />
                <Card.Body>
                    <Card.Title className="search-card-title">{truncate(result.title, 30)}</Card.Title>
                    <Card.Text className="search-card-text">{truncate(result.abstract, 100)}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    </ListGroup>
);

export default SearchResult;
