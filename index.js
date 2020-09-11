const API = require("discord.js")
const config = require("./config.json");
const fs = require("fs");

const client = new API.Client({
    disableEveryone: true
});

client.commands = new API.Collection();
client.aliases = new API.Collection();


client.categories = fs.readdirSync("./commands/");


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

  

client.on("ready", () => {
    console.log(`${client.user.tag} 에 로그인됨`);
    client.user.setActivity(config.defaultStatus, {
      type: 'WATCHING'
    });
});

client.on("message", async message => {
    let prefix = config.prefix;
	
    if (message.mentions.users.some(x => x.id == client.user.id ) &&  !message.author.bot) {
        const embed = new API.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('막대기봇이에요!<a:congratulations:742569193232138250>')
        .setThumbnail('https://i.imgur.com/iNxjnfg.jpg')
        .setDescription(message.author.tag + '님! \n 저를 부르셧나요? \n 접두사는 **-** 입니다 \n **-도움** 을 해보세요! \n 봇 제작: <@457403818913693696> \n 도움주신 분들: <@403025222921486338>')
        .setFooter('막대기봇을 이용해 주셔서 감사합니다')
        .setTimestamp()
        message.channel.send(embed)
    }

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) {
        command.run(client, message, args);
    }
});

client.login(process.env.TOKEN);
