const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "밴",
    category: "관리",
    description: "멤버를 서버에서 차단(밴) 합니다",
    run: async (client, message, args) => {


        if (!args[0]) {
            return message.reply("<a:no:742569138764906628>밴할 사람을 멘션해 주세요")
                
        }

        if (!args[1]) {
            return message.reply("<a:no:742569138764906628>밴 하는 이유를 적어주세요")
                
        }

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("<a:no:742569138764906628> 당신은 유저 차단 권한이 없습니다")
                
        
        }
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("<a:no:742569138764906628> 막대기봇이 차단 권한을 가지고 있지 않습니다")
                
        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!toBan) {
            return message.reply("<a:no:742569138764906628>해당 멤버를 찾을수 없습니다, 다시 시도해 주세요")
                
        }

        if (toBan.id === message.author.id) {
            return message.reply("<a:no:742569138764906628>자기 자신을 밴 할수 없습니다")
                
        }

        if (!toBan.bannable) {
            return message.reply("<a:no:742569138764906628>역할 순위가 높아 차단할수 없습니다")
                
        }
        
        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- baned member:** ${toBan} (${toBan.id})
            **- baned by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`30초가 지나면 무효가 됩니다`)
            .setDescription(`${toBan}을 밴하시겟습니까??`)

        await message.channel.send(promptEmbed).then(async msg => {
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if (emoji === "✅") {
                message.reply(`<a:yes:742568893351985303> 밴 완료됨`)

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`밴이 되지 않습니다...오류 발생 ${err}`)
                    });

                } else if (emoji === "❌") {
    
                    message.reply(`<a:no:742569138764906628> 밴 취소됨`)
            }
        });
    }
};
