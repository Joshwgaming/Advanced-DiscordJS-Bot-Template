module.exports =  {
    name: 'uptime',
    description: 'Shows the bots uptime',
    category: 'General',
    async execute(client, message, args, Client, MessageEmbed) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        const uptimeEmbed = new MessageEmbed()
            .setTitle('**' + 'Bot Uptime:' + '**')
            .addFields(
                { name: "**" +  uptime + "**", value: "**" +  ' ' + "**", inline: false },
            )
            .setColor("#ff0d00")
        message.channel.send({ embeds: [uptimeEmbed] })
    }}