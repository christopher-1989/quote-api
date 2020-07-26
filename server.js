const express = require('express');
const app = express();
//const morgan = require('morgan')

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
//app.use(morgan('dev'))

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes)
    res.send({
        quote: randomQuote.quote
    })
})

app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`))