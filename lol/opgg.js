module.exports.run = (client, message, args) => {
    let pseudo = "";
        for(let i = 0; i < args.length; i++) {
            pseudo += args[i];
            if (i != args.length - 1) {
                pseudo += "+";
            }
        };
        message.channel.send(`https://euw.op.gg/summoner/userName=${pseudo}`);
};

module.exports.help = {
    name: "opgg",
    description: "Renvoie le lien opgg du pseudo mentionné",
    usage: '<ton_argument>',
    cooldown: 10,
    args: true
};
