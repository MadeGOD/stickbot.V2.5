const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "메타몽",
    category: "짤",
    description: "메타몽 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('메타몽')
        .setImage('https://i.imgur.com/VWwAIoX.png')
        .setFooter('제작자: 빈류');
        message.channel.send(embed)
    }
}