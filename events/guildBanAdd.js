module.exports = {
    name: 'guildBanAdd',
	async execute(ban, client, Client, MessageEmbed) {
        console.log(`${ban.user.tag} has been banned in ${ban.guild.name}`)
    }
}