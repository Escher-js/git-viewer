import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class MainComponent extends Component {
    state = {
        repos: []
    }

    fetchRepos = async () => {
        try {
            // GitLabのAPIエンドポイントとパーソナルアクセストークンを設定します。
            const apiEndpoint = 'https://gitlab.example.com/api/v4/projects';
            const personalAccessToken = 'your_personal_access_token';

            // axiosを使って非同期通信を行います。
            const response = await axios.get(apiEndpoint, {
                headers: {
                    'PRIVATE-TOKEN': personalAccessToken
                }
            });

            // 結果をstateに保存します。
            this.setState({ repos: response.data });
        } catch (error) {
            console.error("There was an error fetching repos from GitLab!", error);
        }
    }

    render() {
        return (
            <div>
                <Button onClick={this.fetchRepos}>Fetch Repositories</Button>
                <ul>
                    {this.state.repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default MainComponent;
