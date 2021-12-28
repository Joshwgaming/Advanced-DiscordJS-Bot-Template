const snekfetch = require('snekfetch');
module.exports =  {
    name: 'meme',
    description: 'Post a meme!',
    category: 'General',
    async execute(client, message, args, Client, MessageEmbed) {
        try {
            const { body } = await snekfetch
                .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
                .query({ limit: 800 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('It seems we are out of fresh dank memes!, Try again.');
                const randomnumber = Math.floor(Math.random() * allowed.length)
                const memeEmbed = new MessageEmbed()
                    .setColor("#ff0d00")
                    .setTitle(allowed[randomnumber].data.title)
                    .setURL("https://www.reddit.com" + allowed[randomnumber].data.permalink)
                    .setDescription("Posted by: " + allowed[randomnumber].data.author)
                    .setImage(allowed[randomnumber].data.url)
                    .setFooter("Pictures provided by r/dankmemes ● 🔼 " + allowed[randomnumber].data.ups + " | 🔽 " + allowed[randomnumber].data.ups + " | 💬 " + allowed[randomnumber].data.num_comments);
                message.channel.send({ embeds: [memeEmbed] })
        } catch (err) {
            return console.log(err);
        };
    }
}