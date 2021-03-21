const { MessageEmbed, User } = require("discord.js") ;

module.exports = (client, message) => {
    if (message.author.bot) return;

    message.author.send("Désolé je parle pas aux bouffons")
}