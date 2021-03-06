const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
    if (channel.type === "dm") return;
    else {
        const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: 'CHANNEL_CREATE'
        }) 

        const latestChannelCreated = fetchGuildAuditLogs.entries.first();
        const { executor } = latestChannelCreated;

        const embed = new MessageEmbed()
            .setAuthor(`Création d'un nouveau salon`)
            .setColor('#fd7aff')
            .setDescription(`**Salon créé**: ${channel.name}`)
            .setTimestamp()
            .setFooter(executor.username, executor.displayAvatarURL());

        client.channels.cache.get('822488942988623873').send(embed);
    }
}