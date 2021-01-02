const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const client = new Discord.Client();
const db = require('quick.db');
require('moment-duration-format');


let prefix = "/";//botun ön eki 
let owner = "455695314318262292";// sizin id'niz

bot.on("ready", guild => {
    bot.user.setActivity('OYNUYOR KISMI', { type: 'WATCHING'  })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + bot.channels.size + ` adet kanala, ` + bot.guilds.size + ` adet sunucuya ve ` + bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
    console.log("Bağlandım!")
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor("RANDOM"));
   }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'kurulum') {
    if (message.author.id !== `${owner}`) {
      message.reply('Kurucumun izni olması lazım. Kurucum');
    } else {
      message.channel.sendMessage(` :white_check_mark: Gerekli şeyleri başarılı bir şekilde kurdum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      message.guild.createChannel('notech-log');// notech-log adında kanal kuracaktır.
    })
   }
  }
});


bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "yaz")) {
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.channel.send(mesaj);
    }
    });

bot.login(process.env.TOKEN); //değiştirmeyin.
