const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor("#dc143c")
        .setFooter("A+ bouffon")
        .setTimestamp()

    client.channels.cache.get('822915408909959238').send(embed);
}