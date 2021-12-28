module.exports =  {
    name: 'ping',
    description: 'Shows the bots ping',
    category: 'General',
    async execute(client, message, args, Client, MessageEmbed) {
        message.reply("Pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            m.edit(`**:ping_pong:Pong!**\n **${client.user.username}'s Ping Is:-**  ${ping}ms`);
        });
    }}