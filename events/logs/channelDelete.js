const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE'
    }) 

    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelDeleted;

    const embed = new MessageEmbed()
        .setAuthor(`Suppression d'un salon`)
        .setColor('#fd7aff')
        .setDescription(`**Salon supprimé**: ${channel.name}`)
        .setTimestamp()
        .setFooter(executor.username, executor.displayAvatarURL());

    client.channels.cache.get('822488942988623873').send(embed);
}