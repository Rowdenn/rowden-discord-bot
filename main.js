const { Client } = require('discord.js');
const { PREFIX } = require('./config');
const root = require('app-root-path');
const { generateRandomSentence } = require(root + '/src/generateRandomSentence');
const client = new Client();

module.exports = {
    name: 'qiqi',
    description: 'génére une phrase aléatoire de qiqi',
    args: false,
    execute(message) {
        const embed = new Discord.MessageEmbed()
            .setColor('#ed3452')
            .setDescription(generateRandomSentence('./resources/qiqi.json', 291));
        return message.channel.send(embed);
    },
};

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
        message.channel.send(`https://probuilds.net/champions/details/${champion}`);
    };
});

client.login(process.env.TOKEN);