module.exports =  {
    name: 'serverinfo',
    description: "See the current server's info!",
    category: 'General',
    async execute(client, message, args, Client, MessageEmbed) {
        const { guild } = message
        const { name, id, preferredLocale, memberCount, createdTimestamp} = guild
        const accountAge = new Date().getTime() - createdTimestamp
        const accountAge1 = accountAge / 1000
        const accountAge2 = accountAge1 / 60
        const accountAge3 = accountAge2 / 60
        const accountAge4 = Math.round(accountAge3 / 24)
        const icon = guild.iconURL()
        const channelCount = guild.channels.cache.size
        const serverinfoEmbed = new MessageEmbed()
            .setTitle('**' + 'Server Info' + '**')
            .addFields(
                { name: "**" + "Name:" + "**", value: name, inline: true },
                { name: "**" + "ID:" + "**", value: id, inline: true },
                { name: "**" + "Region:" + "**", value: preferredLocale, inline: true },
                { name: "**" + "Server Age:" + "**", value: accountAge4 + " days", inline: true },
                { name: "**" + "Total Members:" + "**", value: `${memberCount}`, inline: true },
                { name: "**" + "Total Channels:" + "**", value: `${channelCount}`, inline: true },
            )
            .setThumbnail(icon)
            .setColor("#ff0d00")
        message.channel.send({ embeds: [serverinfoEmbed] })
    }
}