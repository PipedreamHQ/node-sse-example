const EventSource = require('eventsource');

// Read API key and SSE URL from .env file
require('dotenv').config();
const {PD_API_KEY, SSE_URL} = process.env;

// Connect to the SSE stream tied to your source,
// passing the API key in the Authorization header
const eventSourceInit = {headers: {Authorization: `Bearer ${PD_API_KEY}`}};
const es = new EventSource(SSE_URL, eventSourceInit);

console.log(`Connected to ${SSE_URL}. Listening for new events...\n`);

es.onmessage = event => {
  console.log(event.data);
};
