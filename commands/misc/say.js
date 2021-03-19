module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "));
};

module.exports.help = {
    name: "say",
    aliases: ['repeat', 'rep'],
    description: "Répéte la phrase entrée par un utilisateur",
    usage: '<ton_argument>',
    isUserAdmin: false,
    permissions: false,
    cooldown: 10,
    args: true
};