const { modRoleID } = require('../config.json')
module.exports =  {
    name: 'ban',
    description: 'Ban a user.',
    category: 'Moderation',
    async execute(client, message, args, Client, MessageEmbed) {
        const { mentions } = message;
        if (message.member.roles.cache.has(modRoleID)){
            const target = mentions.users.first();
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.ban();
                message.reply(`${target.username} has been successfully banned.`);
            } else {
                message.reply(`Error. Please specify someone to ban.`);
            }
        } else {
            message.reply(`You don't have permission for this command.`)
        }
    }
}