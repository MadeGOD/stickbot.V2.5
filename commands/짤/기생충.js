const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "기생충",
    category: "짤",
    description: "기생충 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('기생충')
        .setImage('https://i.imgur.com/dTsuSkp.png')
        .setFooter('제작자: 빈류');
        message.channel.send(embed)
    }
}