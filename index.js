const Discord = require('discord.js')
const client = new Discord.Client()
const { jokes } = require('./jokes')
require('dotenv').config()

const jokeGenerate = () => {
  return jokes[Math.floor(Math.random() * jokes.length)]
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  switch (msg.content) {
    case "Quem é você?":
      msg.reply('Sou um extraterrestre que veio domindar o mundo!')
      break

    case "Conte-me uma piada":
      msg.channel.send(`${jokeGenerate()}`)
      break

    default:
      return
  }
});

client.login(process.env.CLIENT_TOKEN)