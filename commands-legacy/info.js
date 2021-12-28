const fs = require('fs');
const { clientId, authorId, prefix } = require('../config.json')
module.exports =  {
    name: 'info',
    description: 'Show the basic info about the bot',
    category: 'General',
    async execute(client, message, args, Client, MessageEmbed) {
        //////////////
        //////////////
        authorUsername = client.users.cache.find(user => user.id === authorId)
        //////////////
        const command_files = fs.readdirSync('./commands-legacy/').filter(file => file.endsWith('.js'));
        const slash_command_files = fs.readdirSync('./commands-slash/').filter(file => file.endsWith('.js'));
        var commandCount = 0;
        for(const file of command_files){
            const command = require (`../commands-legacy/${file}`);
                client.commands.set(command.name, command);
                commandCount++;
            }
        var newCommCount = commandCount
        for(const file of slash_command_files){
                newCommCount++;
            }
        //////////////
        var mentionedUsr = client.users.cache.find(user => user.id === clientId)
        if (mentionedUsr.presence.status === "dnd" ){
            var usrStatus1 = "🔴 DnD"
        }
        if (mentionedUsr.presence.status === "online" ){
            var usrStatus1 = "🟢 Online"
        }
        if (mentionedUsr.presence.status === "idle" ){
            var usrStatus1 = "🟠 Idle"
        }
        if (mentionedUsr.presence.status === "offline" ){
            var usrStatus1 = "⚪ Offline"
        }
        //////////////
        const accountAge = new Date().getTime() - client.users.cache.find(user => user.id === clientId).createdTimestamp
        const accountAge1 = accountAge / 1000
        const accountAge2 = accountAge1 / 60
        const accountAge3 = accountAge2 / 60
        const accountAge4 = Math.round(accountAge3 / 24)
        //////////////
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
        //////////////
        const infoEmbed = new MessageEmbed()
            .setTitle('🛠️ Bot Information 🛠️')
            .setThumbnail(client.users.cache.find(user => user.id === clientId).displayAvatarURL())
            .addFields(
                { name: "**" + "Author:" + "**", value: `${authorUsername}`, inline: true },
                { name: "**" + "Status:" + "**", value: `${usrStatus1}`, inline: true },
                { name: "**" + "Prefix" + "**", value: `${prefix}`, inline: true },
                { name: "**" + "Current in:" + "**", value: `${client.guilds.cache.size} guilds`, inline: true },
                { name: "**" + "Bot Age:" + "**", value: `${accountAge4} days`, inline: true},
                { name: "**" + "Uptime:" + "**", value: `${uptime}`, inline: true},
                { name: "**" + "Total commands:" + "**", value: `${newCommCount}`, inline: true},
                { name: "**" + "Help Command:" + "**", value: `${prefix}help`, inline: true},
            )
            .setColor("#ff0d00");
        message.channel.send({ embeds: [ infoEmbed ] });
    }}