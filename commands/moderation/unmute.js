const ms = require('ms');
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

    if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas muté");
    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.user.id}> n'est plus muté.`);

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.user.id})`, user.user.avatarURL())
        .setColor('#15ec00')
        .setDescription(`**Action**: unmute`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('822488942988623873').send(embed);
};

module.exports.help = {
    name: "unmute",
    aliases: ['unmute'],
    category: 'moderation',
    description: "Unmute un utilisateur",
    usage: '<@user>',
    isUserAdmin: false,
    permissions: true,
    cooldown: 10,
    args: true
};