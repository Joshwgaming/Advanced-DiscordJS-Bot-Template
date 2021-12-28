const { prefix } = require('../config.json')

module.exports =  {
    name: 'prefix',
    description: 'Shows the bots prefix',
    category: 'General',
    async execute(client, message, args, Discord) {
        message.channel.send('My prefix is currently set to `'+ prefix + '`')
    }}