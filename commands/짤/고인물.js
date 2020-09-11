const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "고인물",
    category: "짤",
    description: "고인물 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('고인물')
        .setImage('https://i.imgur.com/1BUrbrO.png')
        .setFooter('제작자: 빈류');
        message.channel.send(embed)
    }
}