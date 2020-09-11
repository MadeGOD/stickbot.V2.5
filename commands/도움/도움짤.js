const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "도움짤",
    category: "도움",
    description: "명령어 출력",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('일반 명령어')
        .setAuthor('막대기봇 초대(클릭)', 'https://i.imgur.com/iNxjnfg.jpg', 'https://discord.com/api/oauth2/authorize?client_id=676070482189090826&permissions=1074097350&scope=bot')
        .setDescription(' ')
	    .addField('짤 목록','-갤럭시 \n -고인물 \n -기생충 \n -메롱 \n -메타몽 \n -샌즈 \n -어몽어스 \n -음속 \n -터미네이터')
        .addField('"-서포트" 명령어를 이용해 서포트 서버로 오셔서 여러분만의 그림을 신청해 보세요!','ㄱㄱ', true)
        .setTimestamp()
        .setFooter('막대기봇을 이용해 주셔서 감사합니다','https://i.imgur.com/iNxjnfg.jpg');
        message.channel.send(embed)
    }
}