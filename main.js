const { Client } = require('discord.js');
const { PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let pseudo = "";
    let champion = "";

    if (command === 'server') message.channel.send(`Je suis sur le serveur ${message.guild.name}.`);
    if (command === 'user') message.channel.send(`Je suis l'utilisateur ${message.author.tag}.`);
    if (command === 'opgg') { 
        for(let i = 0; i < args.length; i++) {
            pseudo += args[i];
            if (i != args.length - 1) {
                pseudo += "+"
            }
        };
        message.channel.send(`https://euw.op.gg/summoner/userName=${pseudo}`);
    };
    if (command === 'build') { 
        for(let i = 0; i < args.length; i++) {
            champion += args[i];
        };
        message.channel.send(`www.probuilds.net/champions/details/${champion}`);
    }
});

client.login(process.env.TOKEN);