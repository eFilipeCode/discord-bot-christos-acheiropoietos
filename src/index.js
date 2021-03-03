const express = require('express');
const Discord = require("discord.js");
const MessageController = require('../src/controllers/MessageController.js');
require('dotenv').config();

const app = express();

const client = new Discord.Client();

const prefix = "!xp "

client.on("message", (message) => MessageController(message, prefix));
client.login(process.env.BOT_TOKEN);

app.listen(process.env.PORT || 3333);