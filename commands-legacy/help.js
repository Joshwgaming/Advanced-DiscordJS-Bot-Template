const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js')
module.exports = {
    name: 'help',
    description: 'View the help menu',
    category: 'General',
    async execute(client, message, args, Client, MessageEmbed) {
        console.log(message)

        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Page 1 - General Commands',
							description: 'View general commands for the bot!',
							value: 'general_commands',
						},
						{
							label: 'Page 2 - Moderation Commands',
							description: 'View moderation commands for the bot!',
							value: 'moderation_commands',
						},
					]),
			);

        message.reply({ content: 'Help Menu:', components: [row] }); 
}}