const MESSAGES = {
    COMMANDS: {
        LOL: {
            BUILD: {
                name: 'build',
                aliases: ['build', 'probuild'],
                category: 'lol',
                description: 'Envoie le build du champion mentionné',
                cooldown: 10,
                usage: '<champion>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },

            OPGG: {
                name: "opgg",
                aliases: ['opgg'],
                category: 'lol',
                description: "Renvoie le lien opgg du pseudo mentionné",
                usage: '<pseudo>',
                isUserAdmin: false,
                permissions: false,
                cooldown: 10,
                args: true
            }
        },

        MISC: {
            QIQI: {
                name: 'qiqi',
                aliases: ['qiqi'],
                category: 'misc',
                description: 'Répond avec des phrases cultes du mongole de qiqi',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                cooldown: 5,
                args: false
            },

            HELP: {
                name: "help",
                aliases: ['help'],
                category: 'misc',
                description: "Renvoie une liste de commandes ou les informations sur une seule",
                usage: '<nom_de_la_commande>',
                isUserAdmin: false,
                permissions: false,
                cooldown: 3,
                args: false
            }
        },

        MODERATION: {
            BAN: {
                name: "ban",
                aliases: ['ban'],
                category: 'moderation',
                description: "Bannir un utilisateur",
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissions: true,
                cooldown: 10,
                args: true
            },

            KICK: {
                name: "kick",
                aliases: ['kick'],
                category: 'moderation',
                description: "Kick un utilisateur",
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissions: true,
                cooldown: 10,
                args: true
            },

            MUTE: {
                name: "mute",
                aliases: ['mute'],
                category: 'moderation',
                description: "Mute un utilisateur",
                usage: '<@user> <temps>',
                isUserAdmin: true,
                permissions: true,
                cooldown: 10,
                args: true
            },

            PRUNE: {
                name: "prune",
                aliases: ['prune'],
                category: 'moderation',
                description: "Purge un nombre de message spécifié sur un utilisateur",
                usage: '<@user> <nbr_messages>',
                isUserAdmin: true,
                permissions: true,
                cooldown: 10,
                args: true
            },

            PURGE: {
                name: "purge",
                aliases: ['purge'],
                category: 'moderation',
                description: "Purge un nombre de message spécifié",
                usage: '<nbr_messages>',
                isUserAdmin: false,
                permissions: true,
                cooldown: 10,
                args: true
            },

            UNBAN: {
                name: "unban",
                aliases: ['unban'],
                category: 'moderation',
                description: "Débannir un utilisateur",
                usage: '<user_id>',
                isUserAdmin: false,
                permissions: true,
                cooldown: 10,
                args: true
            },

            UNMUTE: {
                name: "unmute",
                aliases: ['unmute'],
                category: 'moderation',
                description: "Unmute un utilisateur",
                usage: '<@user>',
                isUserAdmin: false,
                permissions: true,
                cooldown: 10,
                args: true
            }
        },
        ROLES: {
            ADD: {
                name: 'add',
                aliases: ['add'],
                category: 'roles',
                description: 'Ajouter un rôle',
                usage: '<role_a_ajouter>',
                isUserAdmin: true,
                permissions: true,
                cooldown: 10,
                args: true
            },

            ADDS: {
                name: 'adds',
                aliases: ['adds'],
                category: 'roles',
                description: 'Ajouter plusieurs rôles',
                usage: '<roles_a_ajouter>',
                isUserAdmin: true,
                permissions: true,
                cooldown: 10,
                args: true
            },

            REMOVE: {
                name: 'remove',
                aliases: ['remove', 'rm'],
                category: 'roles',
                description: 'Supprimer un rôle',
                usage: '<role_a_enlever>',
                isUserAdmin: true,
                permissions: true,
                cooldown: 10,
                args: true
            }
        }
    }
}

exports.MESSAGES = MESSAGES;
