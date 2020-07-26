const express = require('express');
const app = express();


const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
const morgan = require('morgan')
app.use(morgan('dev'))

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`))