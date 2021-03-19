module.exports.run = (client, message, args) => {
    args.forEach(rName => {
        let role = message.guild.roles.cache.find (r => r.name === rName.toString());
        if (role) {
            if (message.member.roles.cache.has(role.id)) return message.channel.send("T'as déjà ce rôle bg");
            if (role.permissions.has('KICK_MEMBERS')) return message.channel.send('Tu peux pas avoir ce rôle');

            message.member.roles.add(role)
                .then(m => message.channel.send(`Vous possédez maintenant le rôle ${role}`))
                .catch(e => console.log(e));
        } else {
            message.channel.send("Le rôle n'existe pas");
        };
    });
};

module.exports.help = {
    name: 'adds',
    aliases: ['adds'],
    description: 'Ajouter plusieurs rôles !',
    usage: '<ton_argument>',
    isUserAdmin: true,
    permissions: true,
    cooldown: 10,
    args: true
};