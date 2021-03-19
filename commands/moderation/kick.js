const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    let reason = args.splice(1).join(' ') || 'Aucune raison specifiée';
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas");

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor('#ffa500')
        .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('822488942988623873').send(embed);
};

module.exports.help = {
    name: "kick",
    aliases: ['kick'],
    description: "Kick un utilisateur",
    usage: '<@user> <raison>',
    isUserAdmin: true,
    permissions: true,
    cooldown: 10,
    args: true
};