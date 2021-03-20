const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut spécifier un ***nombre*** entre 1 et 100.');

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100),
        before: message.id,
    });

    await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor('#ffa500')
        .setDescription(`**Action**: purge\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`)

    client.channels.cache.get('822488942988623873').send(embed);
};

module.exports.help = {
    name: "purge",
    aliases: ['purge'],
    category: 'moderation',
    description: "Purge un nombre de message spécifié",
    usage: '<nbr_messages>',
    isUserAdmin: false,
    permissions: true,
    cooldown: 10,
    args: true
};