const axios = require('axios');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.post('/createRepo', async (req, res) => {
    const repoName = req.body.name;

    const gitlabUrl = `http://34.145.12.168/api/v4/projects`;

    const headers = {
        'Authorization': `Bearer ${functions.config().gitlab.token}`,
        'Content-Type': 'application/json'
    };

    const data = {
        name: repoName
    };

    try {
        const response = await axios.post(gitlabUrl, data, { headers });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

exports.app = functions.https.onRequest(app);
