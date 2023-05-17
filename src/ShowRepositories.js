import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowRepositories = ({ username }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/user/repos`, {
                    headers: {
                        'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                    },
                });
                const privateRepos = response.data.filter(repo => repo.private);
                setRepos(privateRepos);
            } catch (error) {
                console.error(error);
            }
        }

        fetchRepos();
    }, [username]);

    return (
        <div>
            <h2>{username}'s Private Repositories</h2>
            {repos.map(repo => (
                <div key={repo.id}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ShowRepositories;
