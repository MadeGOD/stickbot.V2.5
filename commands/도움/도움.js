const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "도움",
    category: "도움",
    description: "명령어 출력",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('명령어')
	    .setAuthor('막대기봇 초대(클릭)', 'https://i.imgur.com/iNxjnfg.jpg', 'https://discord.com/api/oauth2/authorize?client_id=676070482189090826&permissions=1074097350&scope=bot')
        .setDescription('막대기봇 사용을 위한 명령어 정리입니다.\n 명령어는 앞으로도 많이 추가될 예정입니다.')
	    .addFields(
		{ name: '접두사', value: '"-"(막대기)', inline: false},
		{ name: '관리 명령어는?', value: '-도움관리', inline: true },
	    )
        .addField('일반 명령어는?', '-도움일반', true)
        .addField('짤 목록은?', '-도움짤', false)
        .setTimestamp()
        .setFooter('막대기봇을 이용해 주셔서 감사합니다','https://i.imgur.com/iNxjnfg.jpg');
        message.channel.send(embed)
 
    }
}