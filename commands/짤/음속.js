const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "음속",
    category: "짤",
    description: "음속으로 날라가는 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('음속으로 날라가는 막대기')
        .setImage('https://i.imgur.com/NgEWo52.gif')
        .setFooter('제작자: 빈류');
        message.channel.send(embed)
    }
}