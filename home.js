const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
    host: 'redis',
    port: 6379
});

client.set('visitsCounter', 0);

app.get('/', (req, res) => {
    client.get('visitsCounter', (err, visitsCounter) => {
        const count = visitsCounter ? parseInt(visitsCounter) : 0;
        
        res.send('Visits Counter : ' + count);
        client.set('visitsCounter', count + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});