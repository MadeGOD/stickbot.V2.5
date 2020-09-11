const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "도움일반",
    category: "도움",
    description: "명령어 출력",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('일반 명령어')
        .setAuthor('막대기봇 초대(클릭)', 'https://i.imgur.com/iNxjnfg.jpg', 'https://discord.com/api/oauth2/authorize?client_id=676070482189090826&permissions=1074097350&scope=bot')
        .setDescription(' ')
	    .addField('유저, 봇 정보 명령어', '사용방법: **-정보, -정보 (멘션)** \n 멘션을 하지 않았을시 자신의 정보, 멘션한 유저의 정보를 출력합니다', false)
	    .addField('오픈소스 명령어', '사용방법: **-오픈소스** \n 막대기봇 소스(깃허브)의 링크를 출력합니다', false)
	    .addField('막대기봇 정보 명령어', '사용방법: **-봇정보** \n 막대기봇의 정보를 출력합니다', false)
	    .addField('서버 정보 명령어', '사용방법: **-서버정보** \n 서버 정보를 출력합니다', false)
	    .addField('막대기봇 초대 명령어', '사용방법: **-초대** \n 막대기봇에 딱 맞는 초대링크를 드립니다', false)
        .addField('막대기봇 서포트 서버 명령어', '사용방법: **-서포트** \n 막대기봇의 건의와 문의를 받는 서포트 서버 링크를 드립니다', false)
        .addField('가위바위보 명령어', '사용방법: **-가위바위보 후 이모지 3개중 원하는 것을 고르세요** \n 봇과 가위바위보 를 합니다 ~~(주의, 많이 띠껍습니다)~~', false)
        .addField('핑 명령어', '사용방법: **-핑** \n 클라이언트 핑을 알려줍니다', false)
        .setTimestamp()
        .setFooter('막대기봇을 이용해 주셔서 감사합니다','https://i.imgur.com/iNxjnfg.jpg');
        message.channel.send(embed)
    }
}