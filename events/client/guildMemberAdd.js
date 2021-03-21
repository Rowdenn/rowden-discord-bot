const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor("#35f092")
        .setFooter("Un gros bg s'est pointé sur le serveur")
        .setTimestamp()

    client.channels.cache.get('822912485606293548').send(embed);
}