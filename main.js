const { Client, Collection } = require('discord.js');
const { PREFIX } = require('./config');
const { readdirSync } = require("fs");

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`commande chargée: ${getFileName.help.name}`);
        };
    });
};

loadCommands();

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return message.channel.send("Elle existe pas cette commande sale fdp");
    const command = client.commands.get(commandName);

    if (command.help.args && !args.length) {
        let noArgsReply = `Il me faut des arguments pour cette commande, ${message.author}!`;

        if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: \`${PREFIX}${command.help.name} ${command.help.usage}\``

        return message.channel.send(noArgsReply);
    }

    if (!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection());
    }

    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (command.help.cooldown || 5) * 1000;
    console.log(client.cooldowns);

    if (tStamps.has(message.author.id)) {
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

        if (timeNow < cdExpirationTime) {
            timeLeft = (cdExpirationTime - timeNow) / 1000;
            return message.reply(`Tu pourras retaper la commande \`${command.help.name}\` dans ${timeLeft.toFixed(0)} seconde(s).`);
        }
    }

    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmount);

    command.run(client, message, args);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("JVLIVS II", {
        type: "LISTENING"
    });
  });

client.login(process.env.TOKEN);