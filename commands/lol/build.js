module.exports.run = (client, message, args) => {
    let champion = '';
        for(let i = 0; i < args.length; i++) {
            champion += args[i];
        };
        message.channel.send(`https://probuilds.net/champions/details/${champion}`);
};

module.exports.help = {
    name: 'build',
    aliases: ['build', 'probuild'],
    category: 'lol',
    description: 'Envoie le build du champion mentionné',
    cooldown: 10,
    usage: '<champion>',
    isUserAdmin: false,
    permissions: false,
    args: true
};