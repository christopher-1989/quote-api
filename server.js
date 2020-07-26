const express = require('express');
const app = express();
const morgan = require('morgan')

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
app.use(morgan('tiny'))

app.use(express.static('public'));
app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`))

app.get('/api/quotes/random', (req, res, next) => {
    res.send({
        quote: getRandomElement(quotes)
    })
})

app.param('/api/quotes/:person', (req, res, next, person) => {
    console.log('here')
    if (person) {
        console.log(quotes.findIndex(req.person))
        next()
    } else {
        res.status(404).send()
    }
})

app.get('/api/quotes', (req, res, next) => {
    const celeb = req.query.person
    if (!celeb) {
        res.send({
            quotes: quotes
        })
    } else {
        const sayings2 = quotes.filter(quote => quote.person === celeb)
        res.send({
            quotes: sayings2
        })
    }
})