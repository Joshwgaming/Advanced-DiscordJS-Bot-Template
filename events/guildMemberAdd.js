module.exports = {
    name: 'guildMemberAdd',
	async execute(member, client, Client, MessageEmbed) {
        console.log(`${member.user.tag} has joined ${member.guild.name}`)
}}