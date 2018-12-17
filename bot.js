const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready',  () => {
  console.log('By : SAJED  ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});


client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "^^help") {
   message.react("??")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("?Diamond Bot? ?ÇÓã ÇáÈæÊ?", true)
      
      .addField("?By  SAJED      ?", true)
      
      .addField("?^help^????ÇÐÇ ÊÈí ÌãíÚ ÇáÇæÇãÑ ãÚ ÇæÇãÑ ÇÖÇÝíÉ???", true)
      
	    .addField("?^help^^????ÇÐÇ ÊÈí ÇáÇæÇãÑ ÇáÚÇãÉ???", true)
	    
      .addField("?^help^^^????ÇÐÇ ÊÈí  ÇáÇæÇãÑ ÇáÇÏÇÑíÉ???", true)
      
      .addField("?????ÞÑíÈÇ ÓæÝ äÖíÝ ÇáãÒíÏ æ ÇáãÒíÏ ãä ÇáÇæÇãÑ ?????", true)
      
  message.channel.sendMessage({embed});

 }
});




client.on('message', message => {
   if (message.content === "^^roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});
 
client.on('message', message => {
   if (message.content === "^^roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});
 
client.on('message', message => {
   if (message.content === "^^roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});
 
client.on('message', message => {
   if (message.content === "^^roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** ÇäÇ ÇÓãí ãÑíã ***',
   '*** ãÑÍÈÇó ãÇåæ ÇÓãß ¿ ***',
   `*** ÇåáÇ Èß ! ÇäÇ ÊÇÆåå Ýí åÐÇ ÇáãßÇä  ***`,
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** áãÇÐÇ åá ÇäÊ ÞÇÓí ÇáÞáÈ ¿ ***',
   '*** Çääí ÇÔÝÞ Úáíß Úáíß íÌÈ Çä ÊØåÑ ÑæÍß æÊÍÈ ÇáÎíÑ ááÌãíÚ ***',
   '*** ÇÈÊÚÏ Úäí Þáíá Çääí ãÊÚÈÉ ***',
   '*** åá ÇäÊ äÇÏã Úáì ãÇÞáÊ ¿ ***',
   '*** ÇÈÊÚÏ Úäí Þáíá Çääí ãÊÚÈÉ ***',
   '*** åá ÇäÊ äÇÏã Úáì ãÇÞáÊ ¿ ***',
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** æÇæ ÇÔßÑß Çäß ÔÎÕÇó ÑÇÆÚ ! ***',
   '*** ÇÈÍË ãÚí Úä ãäÒáí áÞÏ ßÇä ÞÑíÈÇó ãä åäÇ ***',
   '*** æáÇßä ÚäÏãÇ Íá Çááíá áã ÇÚÏ ÇÑì Çí ÔíÁ ***',
   '*** ãÐÇ ÊÙä Çíä íæÌÏ ¿ íãíä Çæ íÓÇÑ ***',
   '*** åíÇ ÇÐÇó ***',
   '*** ÇæÏ Çä ÇÓÆáß ÓÄÇá æäÍä Ýí ÇáØÑíÞ ***',
   '*** åá ÊÑÇäí ÝÊÇÉ áØíÝÉ Çã ãÎíÝÉ ***',
   '*** ÇÔßÑß !  ***',
   '*** áÞÏ æÕáäÇ Çáì ÇáãäÒá ÔßÑÇó ÌÒíáó ÇäÊØÑäí ËæÇäí æÓæÝ ÇÚæÏ ***',
   '*** åá ÇäÊ ÌÇåÒ ¿ ***',
   '*** áÞÏ ÇÎÈÑÊ æÇáÏí Úäß æåã ãÊÍãÓíä áÑÄíÊß ***',
   '*** åá ÊæÏ Çä ÊÑÇåã ÇáÇä ***',
'*** ÇäÇ áÓÊ ÇáÍæÊ ÇáÇÒÑÞ ßãÇ íÏÚæä ***',
   '*** ÇäÇ áÓÊ ßÇÐÈÉ ÕÏÞäí***',
   '*** áãÇÐÇ ÇÑì Ýí Úíäíß ÇáÎæÝ ¿ ***',
   '*** ÇäÇ ãÌÑÏ ÝÊÇÉ áØíÝÉ ÊÍÈ ÇááÚÈ ãÚ ÇáÌãíÚ ***',
   '*** ÇÚÑÝ ßá ÔíÁ íÍÏË ÇÓãÚ ÐÇáß ÈÇáÑÇÏíæ ***',
   '*** ÓãÚÊ Çä ÇáÈÔÑ íÞÊáæä ãä ÇÌá ÇáãÇá ÝÞØ ***',
   '*** áãÇÐÇ áã ÊÏÎá ÇáÛÑÝÉ ¿ ***',
   '*** ååååååååååååååååååå ÇäÊ ÇáÇä ãÓÌæä Ýí åÐå ÇáÛÑÝÉ ***',
   '*** áä ÊÎÑÌ ÍÊì ÇÚæÏ áß ÈÚÏ Þáíá ***',
   '*** ÇáãÝÊÇÍ ãÚß ! ÇßÊÈ .ãÑíã  ***',
   '*** ãÝÊÇÍ ÇÍãÑ , åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çä áã ÊÍÕá Úáíå , ÇßÊÈ .ãÑíã ãÑÉ ÇÎÑì ***',
   '*** ãÝÊÇÍ ÇÓæÏ . åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çíä ÊÑíÏ Çä ÊÎÊÈÆ ÈÓÑÚÉ ÞÈá Çä ÊÚæÏ ***',
   '*** áÞÏ ÚÇÏÊ ãä ÌÏíÏ Çáì ÇáãäÒá ***',
   '*** áÇ ÊÕÏÑ Çí ÕæÊ ! ***',
   '*** ãÑíã : áÞÏ ÚÏÊ ***',
   '*** ãÑíã : íÇ ÇíåÇ ÇáãÎÇÏÚ Çíä ÇäÊ ***',
   '*** ãÑíã : ÇÚáã Çäß åäÇ Ýí ÇáãäÒá ***',
   '*** ãÑíã : ãÇÐÇ ÊÑíÏ Çä ÊÓãÚ ***',
   '*** ãÑíã : ÇÖÛØ Úáì ÇáÑÇÈØ ÇåÏÇÁ ãäí áß | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** ÇÍÏ ãÇ ÎÑÌ ãä ÇáãäÒá ***',
   '*** ÇäÊÙÑ ÇáÌÒÁ ÇáËÇäí ÚäÏãÇ íæÕá ÇáÈæÊ 100 ÓíÑÝÑ , ÓÇÚÏäÇ Ýí äÔÑ ÇáÈæÊ æÇÏÎá åÐÇ ÇáÓíÑÝÑ  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('^^ãÑíã')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("áÚÈÉ ãÑíã ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});



 const cuttweet = [
     'ßÊ ÊæíÊ þ| ÊÎíøá áæ Ãäß ÓÊÑÓã ÔíÁ æÍíÏ ÝíÕÈÍ ÍÞíÞÉ¡ ãÇÐÇ ÓÊÑÓã¿',
     'ßÊ ÊæíÊ | ÃßËÑ ÔíÁ íõÓßöÊ ÇáØÝá ÈÑÃíß¿',
     'ßÊ ÊæíÊ | ÇáÍÑíÉ áÜ ... ¿',
     'ßÊ ÊæíÊ | ÞäÇÉ ÇáßÑÊæä ÇáãÝÖáÉ Ýí ØÝæáÊß¿',
     'ßÊ ÊæíÊ þ| ßáãÉ ááÕõÏÇÚ¿',
     'ßÊ ÊæíÊ þ| ãÇ ÇáÔíÁ ÇáÐí íõÝÇÑÞß¿',
     'ßÊ ÊæíÊ | ãæÞÝ ããíÒ ÝÚáÊå ãÚ ÔÎÕ æáÇ íÒÇá íÐßÑå áß¿',
     'ßÊ ÊæíÊ þ| ÃíåãÇ íäÊÕÑ¡ ÇáßÈÑíÇÁ Ãã ÇáÍÈ¿',
     'ßÊ ÊæíÊ | ÈÚÏ 10 Óäíä ÇíÔ ÈÊßæä ¿',
     'ßÊ ÊæíÊ þ| ãöä ÃÛÑÈ æÃÌãá ÇáÃÓãÇÁ ÇáÊí ãÑÊ Úáíß¿',
     'þßÊ ÊæíÊ | ÚãÑß ÔáÊ ãÕíÈÉ Úä ÔÎÕ ÈÑÛÈÊß ¿',
     'ßÊ ÊæíÊ | ÃßËÑ ÓÄÇá æÌöøå Åáíß ãÄÎÑðÇ¿',
     'þßÊ ÊæíÊ | ãÇ åæ ÇáÔíÁ ÇáÐí íÌÚáß ÊÔÚÑ ÈÇáÎæÝ¿',
     'þßÊ ÊæíÊ | æÔ íÝÓÏ ÇáÕÏÇÞÉ¿',
     'þßÊ ÊæíÊ | ÔÎÕ áÇÊÑÝÖ áå ØáÈÇ ¿',
     'þßÊ ÊæíÊ | ßã ãÑå ÎÓÑÊ ÔÎÕ ÊÍÈå¿.',
     'þßÊ ÊæíÊ | ßíÝ ÊÊÚÇãá ãÚ ÇáÇÔÎÇÕ ÇáÓáÈííä ¿',
     'þßÊ ÊæíÊ | ßáãÉ ÊÔÚÑ ÈÇáÎÌá ÇÐÇ ÞíáÊ áß¿',
     'þßÊ ÊæíÊ | ÌÓãß ÇßÈÑ ãä ÚñãÑß Çæ ÇáÚßÓø ¿!',
     'þßÊ ÊæíÊ |ÃÞæì ßÐÈÉ ãÔÊ Úáíß ¿',
     'þßÊ ÊæíÊ | ÊÊÃËÑ ÈÏãæÚ ÔÎÕ íÈßí ÞÏÇãß ÞÈá ÊÚÑÝ ÇáÓÈÈ ¿',
     'ßÊ ÊæíÊ | åá ÍÏË æÖÍíÊ ãä ÃÌá ÔÎÕò ÃÍÈÈÊ¿',
     'þßÊ ÊæíÊ | ÃßËÑ ÊØÈíÞ ÊÓÊÎÏãå ãÄÎÑðÇ¿',
     'þßÊ ÊæíÊ | þÇßËÑ Ôí íÑÖíß ÇÐÇ ÒÚáÊ ÈÏæä ÊÝßíÑ ¿',
     'þßÊ ÊæíÊ | æÔ ãÍÊÇÌ ÚÔÇä Êßæä ãÈÓæØ ¿',
     'þßÊ ÊæíÊ | ãØáÈß ÇáæÍíÏ ÇáÍíä ¿',
     'þßÊ ÊæíÊ | åá ÍÏË æÔÚÑÊ ÈÃäß ÇÑÊßÈÊ ÃÍÏ ÇáÐäæÈ ÃËäÇÁ ÇáÕíÇã¿',
]

 client.on('message', message => {
   if (message.content.startsWith("^^ßÊ ÊæíÊ")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('áÚÈå ßÊ ÊæíÊ' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**ÇáÍíÇÉ Èßá ãÇ ÝíåÇ ÊÞÝ ÏÇÆãðÇ Úáì ÍÏ ÇáæÓØíÉ Èíä ÇÊÒÇä ÇáãÚäì æÖÏå ãä ÍÈ æßÑå æÍÞ æÈÇØá æÚÏá æÙáã**.",
  "**ßì ÊÚíÔ Úáíß Çä ÊÊÞä Ýä ÇáÊÌÇåá ÈÇÍÊÑÇÝ**.",
  "**áÇ ÊÍÒä Úáì ãä ÇÔÚÑß ÈÇä ØíÈÊß ÛÈÇÁ ÇãÇã æÞÇÍÊå**.",
  "**åäÇß ãä íÍáã ÈÇáäÌÇÍ æåäÇß ãä íÓÊíÞÙ ÈÇßÑÇ áÊÍÞíÞå**.",
  "**Çä ÊÚÇáÌ Ãáãß ÈäÝÓß Êáß åì ÇáÞæÉ**.", 
  "**ÇáÌãíÚ íÓãÚ ãÇ ÊÞæá æÇáÇÕÏÞÇÁ íäÕÊæä áãÇ ÊÞæá æÇÝÖá ÇáÇÕÏÞÇÁ íäÕÊæä áãÇ ÇÎÝÇå ÓßæÊß**.", 
  "**ÇäÊåì Òãä ÇáÝÑæÓíÉ ¡ áã ÊäÞÑÖ ÇáÎíæá Èá ÇäÞÑÖ ÇáÝÑÓÇä**.", 
  "**Çä Êßæä ÇÎÑÓÇ ÚÇÞáÇ ÎíÑ ãä Çä Êßæä äØæÞÇ ÌåæáÇ**.", 
  "**ÇáãäÇÞÔÇÊ ÇáÚÞíãÉ áÇ ÊäÌÈ ÇÝßÇÑÇ**.", 
  "**äÍä äßÊÈ ãÇ áÇ äÓÊØíÚ Çä äÞæá æãÇ äÑíÏ Çä íßæä**.", 
  "**äÍä äßÊÈ ãÇ áÇ äÓÊØíÚ Çä äÞæá æãÇ äÑíÏ Çä íßæä**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("^^ÎæÇØÑ")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('áÚÈå ÎæÇØÑ' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



client.on("message", message => {
 if (message.content === "^help^") {
        message.react("??")
           message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-?? ÓÑÚå ÇÊÕÇá ããÊÇÒå
-?? Óåá ÇáÇÓÊÎÏÇã 
-? ÕíÇäå ßá íæã
-?? ãÌÇäí Èá ßÇãá 
-?? ÇáÈæÊ ÚÑÈí æ ÓíÊã ÇÖÇÝå ÇááÛå ÇáäßáíÒíÉ

? ?????????????????? ? 

???ÇæÇãÑ ÚÇãÉ???
                        
??^^server ?ãÚáæãÇÊ Úä ÇáÓíÑÝÑ?                      

??^^servers ?ÚáÔÇä ÊÔæÝ ÇáÈæÊ Èßã ÓíÑÝÑ Çæä áÇíä ?  

??^^bot ?áãÚÑÝ ÇáÈæÊ Èßã ÓíÑÝÑ?

??^^date ?áãÚÑÝå ÇáÊÇÑíÎ?

??^^ping ?áãÚÑÝå ÓÑÚå ÇáÈæÊ?

??^^members ?ãÚáæãÇÊ Úä ÇáÇÚÖÇÁ?

??^^embed ?ÎÇÕíå ÛÑÏ áßä ÈÛíÑ ØÑíÞå?

??^^say ?áí íßÑÑ ÇáßáÇã ÇáÐí ÊÞæáå?

??^^animal  ?ßæÏ áí ÇÖåÇÑ ÕæÑ  ááÍíæÇäÇÊ?

? ?????????????????? ? 

???ÇæÇãÑ ÇÏÇÑíÉ???

??^^rooms ?áãÚÑÝå ÚÏÏ ÑæãÇÊ ÇáÓíÑÝÑ?

??^^ban ?áÊÚØí ÔÎÕ ÈÇäÏ?

??^^kick ?áÊÚØí ÔÎÕ ßíß?

??^^clear ?áãÓÍ ÇáÔÇÊ ÈÑÞã?

??^^edit  ?áÊÚÏíá ÑÓÇáå ?

??^^ct  ãÜáÇÍÙå: ÇáÇÓã ÇäÊ ÊÎÊÇÑå?áí ÇäÔÇÁ Ñæã ßÊÇÈí?

??^^cv  ãÜáÇÍÙå: ÇáÇÓã ÇäÊ ÊÎÊÇÑå?áí ÇäÔÇÁ Ñæã ÕæÊí?

??^^delet  ?ßÜæÏ íÍÐÝ ÇáÜÑæã ÓæÇÁ ÕæÊí Çæ ßÊÇÈí?

? ?????????????????? ? 

???ÇáÞÑÚÉ???

??^^roll 1   ?ÇáÞÑÚÉ ãä 1 Çáì 25?

??^^roll 2   ?ÇáÞÑÚÉ ãä 1 Çáì 50?

??^^roll 3   ?ÇáÞÑÚÉ ãä 1 Çáì 75?

??^^roll 4   ?ÇáÞÑÚÉ ãä 1 Çáì 100?

? ?????????????????? ? 

???ÇáÚÇÈ???

??^^ßÊ ÊæíÊ

??^^ãÑíã 

??^^ÎæÇØÑ 

? ?????????????????? ? 

???ÇæÇãÑ ÇáÕæÑ???

??^^avatar ?áí ÚÑÖ ÕæÑÊß Çæ ÕæÑå Çí ÔÎÕ?

??^^image ?áí ÚÑÖ ÕæÑå ÇáÓíÑÝÑ?

??ÞÑíÈÇ

? ?????????????????? ? 

???ÇäæÇÚ ÇáÊÑÍíÈ???

?? ÊÑÍíÈ 1 / ÊÑÍíÈ 2 

?? ÊÑÍíÈ 3 / ÊÑÍíÈ 4

?? ÊÑÍíÈ 5 / ÊÑÍíÈ 6 

?? ÊÑÍíÈ 7 / ÊÑÍíÈ 8

?? ÊÑÍíÈ 9 / ÊÑÍíÈ 10

? ?????????????????? ? 

???ÇáÏÚã ÇáÝäí æÇáãÓÇÚÏÉ???

^^invite | ÇáÞÓã ÇáÇæá áí ÇÖÇÝå ÇáÈæÊ 

^^support| ÇáÞÓã ÇáËÇäí  ÇáÏÚã ÇáÝäí æ ÇáãÓÇÚÏÉ

ÇáÞÓã ÇáËÇáË ãÕãã ÇáÈæÊ | SAJED

? ?????????????????? ? 




`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "^help^^^") {
        message.react("??")
                message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
? ?????????????????? ? 
???ÇæÇãÑ ÇÏÇÑíÉ???

??^^ban ?áÊÚØí ÔÎÕ ÈÇäÏ?

??^^kick ?áÊÚØí ÔÎÕ ßíß?

??^^clear ?áãÓÍ ÇáÔÇÊ ÈÑÞã?

??^^edit  ?áÊÚÏíá ÑÓÇáå ?

??^^ct  ãÜáÇÍÙå: ÇáÇÓã ÇäÊ ÊÎÊÇÑå?áí ÇäÔÇÁ Ñæã ßÊÇÈí?

??^^cv  ãÜáÇÍÙå: ÇáÇÓã ÇäÊ ÊÎÊÇÑå?áí ÇäÔÇÁ Ñæã ÕæÊí?

??^^delet  ?ßÜæÏ íÍÐÝ ÇáÜÑæã ÓæÇÁ ÕæÊí Çæ ßÊÇÈí?

??^^bc  ?ÎíÇÑÇÊ ÇáÈÑæÏßÇÓÊ? 

??^^rooms ?áãÚÑÝå ÚÏÏ ÑæãÇÊ ÇáÓíÑÝÑ?


? ?????????????????? ? 

	  

???ÇáÏÚã ÇáÝäí æÇáãÓÇÚÏÉ???

^^invite | ÇáÞÓã ÇáÇæá áí ÇÖÇÝå ÇáÈæÊ 

^^support| ÇáÞÓã ÇáËÇäí  ÇáÏÚã ÇáÝäí æ ÇáãÓÇÚÏÉ

ÇáÞÓã ÇáËÇáË ãÕãã ÇáÈæÊ | SAJED






`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "^help^^") {
        message.react("??")
                message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
? ?????????????????? ? 

???ÇæÇãÑ ÚÇãÉ???
                        
??^^server ?ãÚáæãÇÊ Úä ÇáÓíÑÝÑ?                      

??^^servers ?ÚáÔÇä ÊÔæÝ ÇáÈæÊ Èßã ÓíÑÝÑ Çæä áÇíä ?  

??^^bot ?áãÚÑÝ ÇáÈæÊ Èßã ÓíÑÝÑ?

??^^date ?áãÚÑÝå ÇáÊÇÑíÎ?

??^^ping ?áãÚÑÝå ÓÑÚå ÇáÈæÊ?

??^^members ?ãÚáæãÇÊ Úä ÇáÇÚÖÇÁ?

??^^embed ?ÎÇÕíå ÛÑÏ áßä ÈÛíÑ ØÑíÞå?

??^^say ?áí íßÑÑ ÇáßáÇã ÇáÐí ÊÞæáå?

??^^animal  ?ßæÏ áí ÇÖåÇÑ ÕæÑ  ááÍíæÇäÇÊ?


? ?????????????????? ? 
	  

???ÇáÏÚã ÇáÝäí æÇáãÓÇÚÏÉ???

^^invite | ÇáÞÓã ÇáÇæá áí ÇÖÇÝå ÇáÈæÊ 

^^support| ÇáÞÓã ÇáËÇäí  ÇáÏÚã ÇáÝäí æ ÇáãÓÇÚÏÉ

ÇáÞÓã ÇáËÇáË ãÕãã ÇáÈæÊ | SAJED


`)


message.author.sendEmbed(embed)

}
}); 


client.on('message', message => {
    if (message.content.startsWith("^^avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('^^ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });

client.on("message", (message) => {
if (message.content.startsWith("^^ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ßÜÊÇÈÜí')

}
});
client.on("message", (message) => {
if (message.content.startsWith("^^cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ÕÜæÊí')
    
}
});






var prefix = "^^";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ^^say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


   client.on("message", message => {
    const prefix = "^^"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  client.on('message', (message) => {
    if (message.content.startsWith('^^kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' Êã ØÑÏ åÐÇ ÇáÔÎÕ ãä ÇáÓíÑÝÑ');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 


client.on('message', (message) => {
    if (message.content.startsWith('^^ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('åÐÇ ÇáÎÇÕíÉ ááÏÇÑÉ ÝÞØ');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'Êã ØÑÏ åÐÇ ÇáÔÎÕ ãä ÇáÓíÑÝÑ');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
  
  client.on("message", (message) => {
    if (message.content.startsWith('^^delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
  
  
client.on('message', message => {
     if (message.content === "^^servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**| ÇáÓíÑÝÑÇÊ |**" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

  var prefix = "^^";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
var prefix = "^^";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» ÇáÓíÑÝÑ :', `${message.guild.name}`)
            .addField('» ÇáãÑÓá : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » ÇáÑÓÇáÉ : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('message', message => {
    if (message.content === "^^server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: Çí Ïí ÇáÓíÑÝÑ',`${message.guild.id}`,true)
         .addField(':date: ÃäÔÆÊ Ýí',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: ÇæäÑ ÇáÓíÑÝÑ',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: ÇáÇÚÖÇÁ ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: ÞäæÇÊ' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: ÇáÏæáå',message.guild.region)
         .addField(':ribbon: ÇíãæÌí ÇáÓíÑÝÑ',`${message.guild.emojis.size}`,true)
         .addField(':construction: ãÓÊæì ÇáÊÍÞÞ',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: ÇáÑÊÈ  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


  client.on('message', message => {
    if (message.content === "^^rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

  var prefix = "^^";
  const HeRo = new Discord.Client();
  client.on('message', message => {
      if (message.content === prefix + "date") {
          if (!message.channel.guild) return message.reply('** This command only for servers **');  
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();

              var Date15= new Discord.RichEmbed()
              .setTitle("**?  Date - ÇáÊÇÑíÎ ? **")
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "?"+ Day + "-" + Month + "-" + Year + "?")
              .setFooter(`*help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
               message.channel.sendEmbed(Date15);
      }
  });




    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='^^members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| ÇáÇæäáÇíä ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| Ïí Çä Ïí',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| ÎÇãá',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| ÇáÇæÝ áÇíä ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('ÚÏÏ ÇÚÖÇÁ ÇáÓíÑÝÑ',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



var prefix = "^^"

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});

client.on('message', message => {
     if (message.content === "^^bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**ÚÏÏ ÇáÓíÑÝÑÇÊ Çáí ÝíåÇ ÇáÈæÊ:**" , client.guilds.size)
  .addField("**ÇáãÓÊÎÏãíä:**", client.users.size)
  .addField("**ÞäæÇÊ:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if (message.content === "^^roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('ÇáÑÊÈ:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on("guildCreate", guild => {
  console.log(` ÔÎÕ ãÇ ÇÖÇÝ ÈæÊ  Ýí ÓíÑÝÑ ÇÓãå ! ${guild.name} ÇæäÑ ÓíÑÝÑ åæ ${guild.owner.user.username}!`)
});




  
  
client.on('ready', () => {
   client.user.setGame(" ^^help | ^^invite ");
}); 

client.on("message", message => {
    var prefix = "^^";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`***Èßá ÍÈ æÇÍÊÑÇã æÔæÞ äÓÊÞÈáß æäÊãäì áß ÞÖÂÁ ÃÌãá ÇááÍÙÇÊ æáÂæÞÇÊ ãÚäÇ ÍíÇß Çááå***, ${member}`);
  
});

client.on('message', message => {
  if (true) {
if (message.content === '^^support') {
      message.author.send(' |https://discord.gg/2AB7Aqt| áÜ Ãí ÇÓÊÝÓÇÑ').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "^^support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ÊÜÜÜÜã" , " |  ÊÜÜÜÜã ÇÑÓÜÜÇáß Ýí ÇáÎÜÜÇÕ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (true) {
if (message.content === '^^invite') {
      message.author.send(' ÑÇÈØ ÇáÈæÊ |  https://discordapp.com/oauth2/authorize?client_id=524246356991410186&scope=bot&permissions=2146958591 ').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "^^invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ÊÜÜÜÜã" , " |  ÊÜÜÜÜã ÇÑÓÜÜÇáß Ýí ÇáÎÜÜÇÕ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('^^bc-users')){
 if(!message.author.id === '408518562521546764') return;
message.channel.sendMessage('ÌÇÑ ÇÑÓÇá ÇáÑÓÇáÉ |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message=>{
    if (message.content ==='^^add-colors'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }
    if (message.content === '^^de-colors'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.roles.find('name', x)
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }

})
  
  
  
  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***Èßá ÍÈ æÇÍÊÑÇã æÔæÞ äÓÊÞÈáß æäÊãäì áß ÞÖÂÁ ÃÌãá ÇááÍÙÇÊ æáÂæÞÇÊ ãÚäÇ***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***åáÇ ÈÇááí ãáß ÞáÈí åáÇ ÈÇááí ÝÏÇå ÇáÑæÍ åáÇ ÈÇááí ÔÛá ÝßÑí åáÇ ÈÇááí åæÇå ÇáÈæÍ.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***ãÑÍÈÇð Èß ÚÏÏ ãÇ ÎØÊå ÇáÃÞáÇã ãä ÍÑæÝ æÈÚÏÏ ãÇ ÃÒåÑ ÈÇáÃÑÖ ÒåæÑ ãÑÍÈÇð ããÒæÌÉ ÈÚØÑ ÇáæÑÏ æÑÇÆÍÉ ÇáÈÎæÑ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***ãÑÍÈÇ ÈÇááí íÌíäÇ åáÊ ÇáÝÑÍÉ ÚáíäÇ äÔÏÊ ÇáÃÔæÇÞ ÝíäÇ ãÑÍÈÇð Èßã ãÑÍÈÇð.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***áæ ÚáãÊ ÇáÏÇÑ Èãä ÒÇÑåÇ ÝÑÍÊ æÃÓÊÈÔÑÊ Ëã ÈÇÓÊ ãæÖÚ ÇáÞÏãíä æÃäÔÏÊ ÈáÓÇä ÇáÍÇá ÞÇÆáÉ ÃåáÇð æÓåáÇð ÈÃåá ÇáÌæÏ æÇáßÑã.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***ãÑÍÈÇ Èß ßËÑ ÇáäÌæã ÇáÓÇØÚÉ æßËÑ ÇáæÑæÏ ÇáÝÇÆÍÉ ÇáÊí ÊÝæÍ ÈÃÒßì ÇáÚØæÑ æßËÑ ãÇ ÊßÊÈ ÇáÃÞáÇã ãä ÇáÍÑæÝ æÇáÚÈÇÑÇÊ. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***Íí Çááå åÐå ÇáæÌæå ÑÄíÊåÇ ÊÒíÏ ÇáÃÝÑÇÍ¡ äÓãÇÊåÇ ÊÏÇæí ÇáÌÑæÍ¡ æÚÈíÑåÇ ÝæÇÍ¡ ÊäËÑå ÇáÑíÇÍ¡ Úáì ÇáÞãã Ýí Çááíá Ýí ÇáÕÈÇÍ***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***ãÑÍÈÇ Èßá ÇáÖíæÝ íæã äÇÏì ÛíÑ ÚÇÏí ãÑÍÈÇ ÝæÞ ÇáÃáæÝ ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***íÇ ãÑÍÈÇ æÓåáÇð ÈÖíÝ áÝÇäÇ¡ íÒåí Èß ÇáÃÏÈ ÇáÚÑÈí æíäËÑ áß ÃÒåÇÑ íÓÞíß ãä äÈÚ ÇáãÔÇÚÑ æÝÇäÇ¡ áíä ÇáåáÇ ÊËãÑ Úáì ÛÕæäß ÃØíÇÑ. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ÊÑÍíÈ 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***ÔßÑÇ ÇáÇäÖãÇãß ÇáíäÇ***" ,mentionavatar.username )
  .setDescription('***ßá ÔíÁ íÑÍÈ Èß ßá ÔíÁ íÊÈÓã æíÊæåÌ ÝÑÍÇð ÈÞÏæãß ßá ÔíÁ íäãÞ ÚÈÇÑÇÊ ÇáÊÑÍíÈ æíÕæÛ ßáãÇÊ ÇáÍÈ áæÌæÏß ßá ÔíÁ íäÊÙÑ ãÔÇÑß??Êß æÞáãß ÇáÑÇÆÚ æÃÈÏÇÚÇÊß ßá ÔíÁ íÑÏÏ ÍíÇß Çááå.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`1help - Script By : SAJED`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`^^help `,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});




client.login(process.env.BOT_TOKEN);
