module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "));
};

module.exports.help = {
    name: "say",
    description: "Répéte la phrase entrée par un utilisateur",
    usage: '<ton_argument>',
    cooldown: 10,
    args: true
};