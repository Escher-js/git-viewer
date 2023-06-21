import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

function MainContent({ mainContent }) {
    return (
        <div>
            {mainContent && (
                <>
                    <h1>Files</h1>
                    <ul>
                        {mainContent.files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    <h1>Publish.md</h1>
                    <p>{mainContent.publishContent}</p>
                </>
            )}
        </div>
    );
}


export default MainContent;
