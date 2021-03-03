const quotes = require('../data/quotes.js');
function getQuote(filter) {
    if (!filter) {
        const randomQuotesIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomQuotesIndex];
    } else {
        const filtredQuotes = quotes.filter(quote => {
            const author = quote.author.toLowerCase();
            return author.includes(filter.toLowerCase());
        });
        const randomQuotesIndex = Math.floor(Math.random() * filtredQuotes.length);
        return filtredQuotes[randomQuotesIndex];
    }
};

module.exports = getQuote;