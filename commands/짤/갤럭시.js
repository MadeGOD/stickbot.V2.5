const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "갤럭시",
    category: "짤",
    description: "샘숭 은하수 막대기",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('샘숭 은하수 막대기 S8')
        .setImage('https://i.imgur.com/2XvtbSc.png')
        .setFooter('제작자: 좀비');
        message.channel.send(embed)
    }
}