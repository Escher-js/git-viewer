import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CardGroup, Card, Button } from 'react-bootstrap';
import './SearchResult.css'; // Assuming you have a CSS file for SearchResult

const MaxletterCount = 100

const SearchResult = ({ results }) => (

    < ListGroup >
        {
            results.map((result, index) => (
                <div onClick={() => window.open(result.webUrl, "_blank")} key={index}>
                    <Card className="search-card">
                        <Card.Img variant="top" src={result.imageUrl} />
                        <Card.Body>
                            <Card.Title className="search-card-title">{result.title}</Card.Title>
                            <Card.Text className="search-card-text">
                                {result.abstract.length > MaxletterCount ? result.abstract.substring(0, MaxletterCount) + '...' : result.abstract}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))
        }
    </ListGroup >
);


export default SearchResult;