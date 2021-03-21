const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE'
    }) 

    const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
    const { executor } = latestMessageDeleted;

    const embed = new MessageEmbed()
        .setAuthor(`Suppression d'un message`)
        .setColor('#fd7aff')
        .setDescription(`**Message supprimé**: ${message.content}\n**Auteur du message**: ${message.author}`)
        .setTimestamp()
        .setFooter(executor.username, executor.displayAvatarURL());

    client.channels.cache.get('822488942988623873').send(embed);
}