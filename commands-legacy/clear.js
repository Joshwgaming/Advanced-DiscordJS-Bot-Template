const { modRoleID } = require('../config.json')
module.exports =  {
    name: 'clear',
    description: 'Clear the chat',
    category: "Moderation",
    async execute(client, message, args, Client, MessageEmbed) {
        if (message.member.roles.cache.has(modRoleID)){
            if(!args[0]) return message.reply('Error. Please define amount you want to clear.')
            if(args[0] > 100) return message.reply('Error. You cannot clear more than 100 messages.')
            message.channel.bulkDelete(args[0])
            message.channel.send("Successfully deleted " + args[0] + " messages!")
            .then(msg=> {
                setTimeout(function(){
            }, 5000)})
        } else { 
            message.reply(`You don't have permission for this command.`)
        }
    }
}