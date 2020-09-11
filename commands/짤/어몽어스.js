const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "어몽어스",
    category: "짤",
    description: "어몽어스 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('어몽어스')
        .setImage('https://i.imgur.com/R8cPUu5.png')
        .setFooter('제작자: 빈류');
        message.channel.send(embed)
    }
}