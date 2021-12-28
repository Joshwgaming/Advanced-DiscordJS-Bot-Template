const { prefix, } = require('../config.json');
module.exports = {
    name: 'messageCreate',
    async execute (message, client, Client, MessageEmbed) { 
        console.log(`#${message.channel.name}: ${message.author.tag}> ${message.content}`)

        // THIS HAS TO STAY AT BOTTOM OF CODE FOR LEGACY COMMANDS TO WORK
        if (message.content.startsWith(prefix)) { 

        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift();
        const command = client.commands.get(cmd);
    
        if(command) command.execute(client, message, args, Client, MessageEmbed);
        }
    }
};