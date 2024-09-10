const axios = require(‘axios’);

const fetch = require(‘node-fetch’);

const llamaApiUrl = ‘(link unavailable)’;

const apiKey = ‘API_KEY’;

const llamaClient = axios.create({

. baseURL: llamaApiUrl,

. headers: {

. Authorization: `Bearer ${apiKey}`,

. },

});

module.exports = llamaClient;