import React from 'react';
import Card from 'react-bootstrap/Card';

function SearchResult({ result, fetchFiles }) {
    return (
        <Card className="mb-4" onClick={() => fetchFiles(result.id)}>
            <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>{result.abstract}</Card.Text>
            </Card.Body>
        </Card>
    );
}


export default SearchResult;