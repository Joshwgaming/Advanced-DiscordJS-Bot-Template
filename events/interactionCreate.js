const { clientId, prefix } = require('../config.json')
const wait = require('util').promisify(setTimeout);
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js')
const fs = require('fs');
module.exports = {
	name: 'interactionCreate',
	async execute(interaction, message) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);




		//if (interaction.message.author.id === clientId) {
            if (interaction.type === 'MESSAGE_COMPONENT' && interaction.customId === 'select' && interaction.message.content === 'Help Menu:') {
				console.log(interaction.message)
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
							description: 'View Moderation commands for the bot!',
							value: 'moderation_commands',
						},
					]),
			);
				const command_files = fs.readdirSync('./commands-legacy/').filter(file => file.endsWith('.js'));

        for(const file of command_files){
            const command = require (`../commands-legacy/${file}`);
                if (command.category === 'General') {
                    var generalCommands;
                    generalCommands = `${generalCommands} \n${prefix}${command.name} - ${command.description}\n`;
                } else if (command.category === 'Moderation') {
                    var modCommands;
                    modCommands = `${modCommands} \n${prefix}${command.name} - ${command.description}\n`;
                }
        }
        if (generalCommands.startsWith('undefined')){
            generalCommands = generalCommands.slice(11)
        };
        if (modCommands.startsWith('undefined')){
            modCommands = modCommands.slice(11)
        };
		const modCommandsEmbed = new MessageEmbed()
		.setTitle("Moderation Commands")
		.setDescription(modCommands)
		.setTimestamp();
		const generalCommandsEmbed = new MessageEmbed()
		.setTitle("General Commands")
		.setDescription(generalCommands)
		.setTimestamp();
                if (interaction.values[0] === "general_commands") {
                    await interaction.update({ embeds: [generalCommandsEmbed], components: [row] });
                } else if (interaction.values[0] === "moderation_commands") {
                    await interaction.update({ embeds: [modCommandsEmbed], components: [row] });
                }
            }
        //}
	},
};