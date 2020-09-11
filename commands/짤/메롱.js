const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "메롱",
    category: "짤",
    description: "메롱하는 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('메롱하는 막대기')
        .setImage('https://i.imgur.com/BdXI5Xa.png')
        .setFooter('제작자: 좀비');
        message.channel.send(embed)
    }
}