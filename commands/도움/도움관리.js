const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "도움관리",
    category: "도움",
    description: "명령어 출력",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('관리 명령어')
        .setAuthor('막대기봇 초대(클릭)', 'https://i.imgur.com/iNxjnfg.jpg', 'https://discord.com/api/oauth2/authorize?client_id=676070482189090826&permissions=1074097350&scope=bot')
        .setDescription(' ')
        .addField('유저 밴(차단) 명령어', '사용방법: **-밴 (밴하고 싶은 유저) (밴 하는 이유)** \n 해당 유저를 서버에서 밴(차단) 합니다', false)
        .addField('유저 킥(강퇴) 명령어', '사용방법: **-킥 (킥하고 싶은 유저) (킥 하는 이유)** \n 해당 유저를 서버애서 킥(강퇴) 합니다', false)
        .addField('메시지 클리어(대량 삭제) 명령어', '사용방법: **-클리어 (지우고 싶은 갯수)** \n 해당 갯수많큼 메시지를 삭제합니다(한번에 최대 100개까지 삭제 가능)', false)
        .setTimestamp()
        .setFooter('막대기봇을 이용해 주셔서 감사합니다','https://i.imgur.com/iNxjnfg.jpg');
        message.channel.send(embed)
    }
}