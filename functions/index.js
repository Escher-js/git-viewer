const axios = require('axios');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const fs = require('fs')
const path = require('path')

const app = express();

app.use(cors({ origin: true }));

// Define the server check function
const checkServer = async (url) => {
    try {
        await axios.head(url, { timeout: 1000 });
        return true;
    } catch (error) {
        if (error.code === "ECONNABORTED") {
            return false;
        }
        throw error; // If the error is not ECONNREFUSED, re-throw it
    }
};

app.post('/createRepo', async (req, res) => {
    const repoName = req.body.name;

    const gitlabUrl = `http://34.145.12.168/api/v4/projects`;

    const headers = {
        'Authorization': `Bearer ${functions.config().gitlab.token}`,
        'Content-Type': 'application/json'
    };

    const data = {
        name: repoName,
        initialize_with_readme: true,
    };

    try {
        const response = await axios.post(gitlabUrl, data, { headers });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

app.get('/listRepos', async (req, res) => {
    const gitlabUrl = `http://34.145.12.168/api/v4/projects`;

    // First, check if the server is available
    const serverIsAlive = await checkServer(gitlabUrl);

    if (!serverIsAlive) {
        // If the server is not available, return the dummy data
        const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './dummyData.json')));
        res.send(data);
        return;
    }

    const headers = {
        'Authorization': `Bearer ${functions.config().gitlab.token}`
    };
    try {
        const response = await axios.get(gitlabUrl, { headers });
        res.send(response.data);
    } catch (error) {
        console.error(error);

        // If the request was made and the server responded with a status code
        // that falls out of the range of 2xx, we can get the error status code
        if (error.response) {
            res.status(error.response.status).send({ status: error.response.status });
        } else {
            // Otherwise, we don't know what happened, return a generic error
            res.status(500).send({ status: 500, message: 'Unknown error' });
        }
    }
});


exports.app = functions.https.onRequest(app);
