const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {

			const AuthorAccountAge = new Date().getTime() - interaction.user.createdTimestamp;
            const AuthorAccountAge1 = AuthorAccountAge / 1000;
            const AuthorAccountAge2 = AuthorAccountAge1 / 60;
            const AuthorAccountAge3 = AuthorAccountAge2 / 60;
            const AuthorAccountAge4 = Math.round(AuthorAccountAge3 / 24);

            const filteredRoles = interaction.member.roles.cache.filter(role => role.id != interaction.guild.id);
            const listedRoles = filteredRoles.sort((a, b) => b.position - a.position).map(role => role.toString()); 


            const messageAuthorInfoEmbed = new MessageEmbed()
                .setTitle('**' + interaction.user.username + " - " + interaction.user.id + '**')
                .setThumbnail(interaction.user.displayAvatarURL())
                .addFields(
                    { name: "Bot:", value: `${interaction.user.bot}` ,inline: true },
                    { name: "Account Age:", value: `${AuthorAccountAge4}` + " days",inline: true },
                    { name: "Roles", value: `${listedRoles.join(", ")}` ,inline: false },
                )
                .setColor("#ff0d00");
			return interaction.reply({embeds: [messageAuthorInfoEmbed]});
	},
};