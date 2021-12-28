module.exports = {
    name: 'guildMemberRemove',
	async execute(member, client, Client, MessageEmbed) {
        console.log(`${member.user.tag} has left ${member.guild.name}`)
}}