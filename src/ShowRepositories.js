import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowRepositories = ({ username }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`);
                setRepos(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchRepos();
    }, [username]);

    return (
        <div>
            <h2>{username}'s Repositories</h2>
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
