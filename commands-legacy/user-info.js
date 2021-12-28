module.exports =  {
    name: 'userinfo',
    description: 'See your user info!',
    category: 'Tu',
    async execute(client, message, args, Client, MessageEmbed) {
        const { guild } = message
        if (message.mentions.users.first()){
        
            let mentionedUser = message.mentions.users.first();

            const MentionedAccountAge = new Date().getTime() - mentionedUser.createdTimestamp;
            const MentionedAccountAge1 = MentionedAccountAge / 1000;
            const MentionedAccountAge2 = MentionedAccountAge1 / 60;
            const MentionedAccountAge3 = MentionedAccountAge2 / 60;
            const MentionedAccountAge4 = Math.round(MentionedAccountAge3 / 24);

            const member = guild.members.cache.get(message.mentions.users.first().id);

            const filteredRoles = member.roles.cache.filter(role => role.id != message.guild.id);
            const listedRoles = filteredRoles.sort((a, b) => b.position - a.position).map(role => role.toString()); 

            const mentionedUserInfoEmbed = new MessageEmbed()
                .setTitle('**' + mentionedUser.username + " - " + mentionedUser.id + '**')
                .setThumbnail(mentionedUser.displayAvatarURL())
                .addFields(
                    { name: "Bot:", value: `${mentionedUser.bot}` ,inline: true },
                    { name: "Account Age:", value: `${MentionedAccountAge4}` + " days",inline: true },
                    { name: "Roles", value: `${listedRoles.join(", ")}` ,inline: false },
                )
                .setColor("#ff0d00");
            message.channel.send({embeds: [mentionedUserInfoEmbed]});
        } else {

            const AuthorAccountAge = new Date().getTime() - message.author.createdTimestamp;
            const AuthorAccountAge1 = AuthorAccountAge / 1000;
            const AuthorAccountAge2 = AuthorAccountAge1 / 60;
            const AuthorAccountAge3 = AuthorAccountAge2 / 60;
            const AuthorAccountAge4 = Math.round(AuthorAccountAge3 / 24);

            const filteredRoles = message.member.roles.cache.filter(role => role.id != message.guild.id);
            const listedRoles = filteredRoles.sort((a, b) => b.position - a.position).map(role => role.toString()); 


            const messageAuthorInfoEmbed = new MessageEmbed()
                .setTitle('**' + message.author.username + " - " + message.author.id + '**')
                .setThumbnail(message.author.displayAvatarURL())
                .addFields(
                    { name: "Bot:", value: `${message.author.bot}` ,inline: true },
                    { name: "Account Age:", value: `${AuthorAccountAge4}` + " days",inline: true },
                    { name: "Roles", value: `${listedRoles.join(", ")}` ,inline: false },
                )
                .setColor("#ff0d00");
            message.channel.send({embeds: [messageAuthorInfoEmbed]});
        }
    }
}