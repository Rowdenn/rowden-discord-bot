const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    let champion = '';
        for(let i = 0; i < args.length; i++) {
            champion += args[i];
        };
        message.channel.send(`https://probuilds.net/champions/details/${champion}`);
};

module.exports.help = MESSAGES.COMMANDS.LOL.BUILD;