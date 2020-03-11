const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../client/dist'))

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`This app is listening on port ${port}!`));