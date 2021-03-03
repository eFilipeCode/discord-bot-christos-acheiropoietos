const Discord = require("discord.js");
const MessageController = require('../src/controllers/MessageController.js');
require('dotenv').config();

const client = new Discord.Client();

const prefix = "!xp "

client.on("message", (message) => MessageController(message, prefix));
client.login(process.env.BOT_TOKEN);