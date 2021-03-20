const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    let user = await client.users.fetch(args[0]);
    if (!user) return message.reply("L'utilisateur n'existe pas");
    message.guild.members.unban(user);

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
        .setColor('#15ec00')
        .setDescription(`**Action**: unban`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('822488942988623873').send(embed);
};

module.exports.help = {
    name: "unban",
    aliases: ['unban'],
    category: 'moderation',
    description: "Débannir un utilisateur",
    usage: '<user_id>',
    isUserAdmin: false,
    permissions: true,
    cooldown: 10,
    args: true
};