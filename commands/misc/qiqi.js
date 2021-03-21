const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    const phrasesQiqi = [
        "C'est OP",
        "Go NERF",
        "Hé viens 1v1 LA VRAIMENT",
        "La juiffannnnce",
        "Ta mère la juive",
        "Le noir il court vite",
        "Oui la vraiment",
        "Suce ma grosse bite de noir",
        "AH BOOOOOOOOOOOOOOON",
        "Go ff je sais même pas pourquoi je joue",
        "J'AI PAS DE TEAM",
        "Hé ferme là",
        "Je m'en fou",
        "La satou",
        "Bande de silvers de merde",
        "Faut nerf les noirs",
        "C'est l'afrique au bot",
        "LA FAMILLE DE NOIR LA"
    ];
    const reponse = phrasesQiqi[Math.floor(Math.random() * phrasesQiqi.length)];
    message.channel.send(reponse);
};

module.exports.help = MESSAGES.COMMANDS.MISC.QIQI;