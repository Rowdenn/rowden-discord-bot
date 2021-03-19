module.exports.run = (client, message, args) => {
    let role = message.guild.roles.cache.find (r => r.name === args.toString());
        if (role) {
            if (!message.member.roles.cache.has(role.id)) return message.channel.send("Tu possèdes pas ce rôle");

            message.member.roles.remove(role)
                .then(m => message.channel.send(`Tu ne possédes plus le rôle ${role}`))
                .catch(e => console.log(e));
        } else {
            message.channel.send("Tu peux pas enlever un rôle qui n'existe pas");
        }
};

module.exports.help = {
    name: 'remove',
    aliases: ['remove', 'rm'],
    description: 'Supprimer un rôle !',
    usage: '<ton_argument>',
    isUserAdmin: true,
    permissions: true,
    cooldown: 10,
    args: true
};