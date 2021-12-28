module.exports =  {
    name: 'pfp',
    description: 'Show a users profile picture.',
    category: 'General',
    async execute(client, message, args, Client, MessageEmbed) {
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb=new MessageEmbed()
                .setImage(member.displayAvatarURL())
                .setTitle(member.username)
                .setColor("#ff0d00")
            message.channel.send({ embeds: [emb] })
            
        }
        else{
            message.channel.send("Sorry no user was found with that name")

        }
        }else{
            const emb=new MessageEmbed()
                .setImage(message.author.displayAvatarURL())
                .setTitle(message.author.username)
                .setColor("#ff0d00")
            message.channel.send({ embeds: [emb] })
        }
    }}