const { quotes } = require('./data');
//console.log(quotes)
const name = "Grace Hopper"
const people = quotes.map(indiv => indiv.person)
const sayings = []
for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].person === name) {
        sayings.push(quotes[i].quote)
    }
}

const sayings2 = quotes.filter(quote => quote.person === name)
const sayingsOnly = sayings2.map(indiv => indiv.quote)
console.log(sayingsOnly)


