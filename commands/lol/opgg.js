const { MESSAGES } = require("../../util/constants");

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

module.exports.help = MESSAGES.COMMANDS.LOL.OPGG;
