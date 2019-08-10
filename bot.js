const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I`m here bitches');
});
bot.on('message', (msg) => {
    if(!msg.guild) return;
    if(msg.content.toLowerCase() == "fuck you"){
        msg.reply(`No fuck you`)
    };

    if(msg.content.startsWith('!kick')){
        const user = msg.mentions.users;
        console.log(user)
        if(user){
            const member = msg.guild.member(user);
            console.log(member);
            if(member)
                {member.kick('Member of guild kicked')
                .then(() => msg.guild.reply(`Member of guild,${user.username}, successfully kicked`)).catch(err => {
                    msg.reply('It was unable to kick user')
                    console.error(err)
                })}
            else{
                msg.reply('There`s no member mentioned in this guild')
            }    
        }
        else{
            msg.reply('I don`t fucking know who i must kick')
        }
    }

    if(msg.content.startsWith('!ban')){
        const user = msg.mentions.users.first();
        if(user){
            const member = msg.guild.member(user);
            if(member){
                member.ban('Member banned')
                .then(() => msg.reply(`Member ${user.username} succesfully banned`))
                .catch(err => {
                    msg.reply('It was unable to ban user');
                    console.error(err);
                })
            }
            else{
                msg.reply(`There no member mentioned in this guild`)
            }
        }
        else{
            msg.reply('I don`t fucking know who i must ban')
        }
    }
    
    if(msg.content == '!roll'){
        msg.reply(`You got ${Math.round(Math.random() * 100)}!!!`)
    }
    
    if(msg.content == '!flip'){
        Math.round(Math.random()) == 1 ? msg.reply('Орел') : msg.reply('Решка');
    }
    if(msg.content == '!join'){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join()
            .then((connection) => {
                msg.reply('Successfully connected to the voice channel');
                const dispatcher = connection.playFile('C:\Users\Алексей\Documents\Shareman\Музыка\Дискотека 80-90-х - Коллекция\Дискотека 80-90-х - Коллекция (27 СD)\Дискотека 80-х - Лучшие Disco хиты часть 17.mp3');
                dispatcher.on('error', (err) => {
                    console.error(err);
                })
            })
            .catch(err => console.error(err))
        }
        else{
            msg.reply('First of all join a channel')
        }
    }
});

bot.login('NjAyNTE3NDAzMzQyOTk1NDU4.XTSUrQ.UwIOmu4ljm4hlfKIh7aZyqiLe_k');