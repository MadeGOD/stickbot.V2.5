const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "샌즈",
    category: "짤",
    description: "샌즈 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('샌즈')
        .setImage('https://i.imgur.com/XNxemT8.png')
        .setFooter('제작자: 밧지');
        message.channel.send(embed)
    }
}