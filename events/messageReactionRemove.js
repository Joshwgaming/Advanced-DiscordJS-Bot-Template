module.exports = {
    name: 'messageReactionRemove',
	async execute (reaction, user, client, Client, MessageEmbed) { 
		if (reaction.message.partial) {
			try {
				await reaction.message.fetch();
			} catch (error) {
				console.error('Something went wrong when fetching the message: ', error);
			}
		}
		const member = await reaction.message.guild.members.cache.find(member => member.id === user.id); //member info
		console.log(`${member.user.tag} unreacted with ${reaction.emoji.name}`)
		}
	}