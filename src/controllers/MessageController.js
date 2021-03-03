const getQuote = require('../utils/getQuote.js');

async function MessageController(message, prefix) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'quote' && args[0] == undefined) {
        const quote = getQuote();
        message.react('🙏');
        message.reply(`_${quote.quote}_
            **${quote.author}**`);
    } else if (command === 'quote' && args[0] != undefined) {
        const quote = getQuote(args[0]);
        if (quote !== undefined) {
            message.react('🙏');
            message.reply(`_${quote.quote}_
            **${quote.author}**`);
        } else {
            message.react('⚠️');
        message.reply(`**Sorry. Your search doesn't match any quote. Please try again with other search parameters.**`);
        }
    };
};

module.exports = MessageController;