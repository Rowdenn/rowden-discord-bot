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
        "La satou"
    ];
    const reponse = phrasesQiqi[Math.floor(Math.random() * phrasesQiqi.length)];
    message.channel.send(reponse);
};

module.exports.help = {
    name: 'qiqi',
    aliases: ['qiqi'],
    description: 'Répond avec des phrases cultes du mongole de qiqi',
    usage: '',
    isUserAdmin: false,
    permissions: false,
    cooldown: 5,
    args: false
};