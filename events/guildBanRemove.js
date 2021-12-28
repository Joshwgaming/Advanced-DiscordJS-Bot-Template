module.exports = {
    name: 'guildBanRemove',
	async execute(ban, client, Client, MessageEmbed) {
        console.log(`${ban.user.tag} has been unbanned in ${ban.guild.name}`)
    }
}