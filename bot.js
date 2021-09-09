const Discord = require('discord.js');
const Database = require("@replit/database")
const db = new Database()
const client = new Discord.Client();

const botToken = process.env['bot-token']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login(botToken);