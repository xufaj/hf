const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 client.on('message' , message => {
var prefix = "-"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "call")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("462006869834203159").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : sajed  ")
                                                

message.channel.send(embed);


}
    
});
 
 client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('524215872005341194').roles.find("Rainbow", "اسم الرتبه الا تبيها ملونه").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});

 
 
 
 
 
 client.on('ready', () => {
   console.log(`----------------`);
      console.log(`1help - Script By : SAJED`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Rainbow `,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});
 
client.login('token');
