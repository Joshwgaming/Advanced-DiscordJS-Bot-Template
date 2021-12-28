const fs = require('fs');

module.exports = (client, Client, MessageEmbed) => {
    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`../events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client, Client, MessageEmbed));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client, Client, MessageEmbed));
	}
}
}