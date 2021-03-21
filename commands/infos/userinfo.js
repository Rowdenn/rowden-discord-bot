module.exports.run = (client, message, args) => {
    const user_mention = message.mentions.users.first()
    message.channel.send(`Voici le tag de la personne mentionée: ${user_mention.tag}.`)
};

module.exports.help = {
    name: 'userinfo',
    aliases: ['info'],
    category: 'infos',
    description: 'Renvoie les informations d\'un utilisateur mentionné.',
    usage: '<ton_argument>',
    isUserAdmin: true,
    permissions: true,
    cooldown: 10,
    args: true
};