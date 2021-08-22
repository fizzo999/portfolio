'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.use('*', (request, response) =>
  response.status(404).send('Sorry, that route does not exist.')
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
