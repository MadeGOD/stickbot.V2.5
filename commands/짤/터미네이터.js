const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "터미네이터",
    category: "짤",
    description: "터미네이터 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('터미네이터')
        .setImage('https://i.imgur.com/rSJLI6q.png')
        .setFooter('제작자: 빈류');
        message.channel.send(embed)
    }
}