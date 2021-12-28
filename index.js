const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const { botToken } = require('./config.json');
const client = new Client({
    partials: [
        "CHANNEL", "MESSAGE", "REACTION",
    ],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_BANS,
    ]
});

client.slashCommands = new Collection();
client.commands = new Collection();

['slash-command-handler', 'command-handler', 'event-handler',].forEach(handler => {
    require(`./handlers/${handler}`)(client, Client, MessageEmbed,);
})

client.login(botToken);
