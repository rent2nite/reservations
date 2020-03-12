const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`This app is listening on port ${port}!`));
