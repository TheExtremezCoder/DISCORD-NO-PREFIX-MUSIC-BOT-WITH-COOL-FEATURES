const MusicBot = require("./structures/MusicClient");
const Topgg = require("@top-gg/sdk")
const client = new MusicBot();
client.topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0NTAwMzkzNzU0NTcyODAyMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4Mzg2MTA4fQ.Yfbrnwfy1SwNIFyZjt5JtOzFiDEFRbkVxyr62PM3VEs")
client.connect()

module.exports = client; 
var http = require('http'); http.createServer(function (req, res) { res.write("I'm alive"); res.end(); }).listen(8080); 

const { MessageEmbed } = require('discord.js')

  client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;
    
    let options = interaction.values;
    const funny = options[0]

    if(funny === 'first') {
        const embed1 = new MessageEmbed()
          .setColor(client.embedColor)
        .setThumbnail(client.user.displayAvatarURL())      
         .setDescription("➡ `:` Help\n➡ `:` Invite\n➡ `:` Ping\n➡ `:` Node\n➡ `:` Stats\n➡ `:` Uptime\n➡ `:` Vote")
        .setAuthor({name : `Information Commands`,iconURL : client.user.displayAvatarURL()})        .setColor(client.embedColor)
        .setFooter("Quality Music By : Pixie.")
      .setImage("https://media.discordapp.net/attachments/1162795987014787162/1198544044050092092/standard.gif?ex=65c8849f&is=65b60f9f&hm=7bda3e2b1b67d0d0aa48c5ae793d5168e22b6aa42556fe140d7b487ee8557a73&=&width=850&height=300")   
        interaction.reply({ embeds: [embed1], ephemeral: true })
        return
    }

if(funny === 'fourth') {
        const embed2 = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("➡ `:` Filters")
    .setAuthor({name : `Filter Commands`,iconURL : client.user.displayAvatarURL()})
        
        .setColor(client.embedColor)
        .setFooter("Quality Music By : Pixie.")
  .setImage("https://media.discordapp.net/attachments/1162795987014787162/1198544044050092092/standard.gif?ex=65c8849f&is=65b60f9f&hm=7bda3e2b1b67d0d0aa48c5ae793d5168e22b6aa42556fe140d7b487ee8557a73&=&width=850&height=300")   
     
        interaction.reply({ embeds: [embed2], ephemeral: true })
        return
    }

if(funny === 'second') {
        const embed4 = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL()) 
        .setDescription("➡ `:` AutoPlay\n➡ `:` Clearqueue\n➡ `:` Join\n➡ `:` Leave\n➡ `:` Loop\n➡ `:` Nowplaying\n➡ `:` Pause\n➡ `:` Play\n➡ `:` Volume\n➡ `:` Destroy\n➡ `:` Queue\n➡ `:` Resume\n➡ `:` Shuffel\n➡ `:` Skip\n➡ `:` Stop")
        .setAuthor({name : `Music Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter("Quality Music By : Pixie.")
  .setImage("https://media.discordapp.net/attachments/1162795987014787162/1198544044050092092/standard.gif?ex=65c8849f&is=65b60f9f&hm=7bda3e2b1b67d0d0aa48c5ae793d5168e22b6aa42556fe140d7b487ee8557a73&=&width=850&height=300")   
     
        interaction.reply({ embeds: [embed4], ephemeral: true })
        return
    }

if(funny === 'fifth') {
        const embed5 = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("➡ `:` 24/7\n➡ `:` Setprefix\n➡ `:` Destroy")
        .setAuthor({name : `Config Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter("Quality Music By : Pixie.")
  .setImage("https://media.discordapp.net/attachments/1162795987014787162/1198544044050092092/standard.gif?ex=65c8849f&is=65b60f9f&hm=7bda3e2b1b67d0d0aa48c5ae793d5168e22b6aa42556fe140d7b487ee8557a73&=&width=850&height=300")   
  interaction.reply({ embeds: [embed5], ephemeral: true })
        return
}

  if(funny === 'sixth') {
        const embed6 = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("➡ `:` Avatar\n➡ `:` Serverinfo\n➡ `:` Servericon\n➡ `:` Membercount\n➡ `:` Firstmsg\n➡ `:` Listroles\n➡ `:` Listemojis")
        .setAuthor({name : `Utility Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter("Quality Music By : Pixie.")
    .setImage("https://media.discordapp.net/attachments/1162795987014787162/1198544044050092092/standard.gif?ex=65c8849f&is=65b60f9f&hm=7bda3e2b1b67d0d0aa48c5ae793d5168e22b6aa42556fe140d7b487ee8557a73&=&width=850&height=300")   
  interaction.reply({ embeds: [embed6], ephemeral: true })
        return
          }

if(funny === 'third') {
        const embed3 = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Information Commands [ 8 ]","`help, invite, ping, node, stats, uptime, vote`")
          
          .addField("Music Commands [ 15 ] ","`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`")
          
          .addField("Filter Commands [ 1 ]","`filters`")
          
          .addField("Utility Commands [ 7 ]","`avatar, server-icon, serverinfo, membercount, firstmsg, list-roles, list-emojis`")
          
          .addField("Settings [ 3 ]","`24/7, setprefix, destroy`")
          
        .setAuthor({name : `All Commands`,iconURL : client.user.displayAvatarURL()})
        .setColor(client.embedColor)
        .setFooter("Quality Music By : Pixie.")
  .setImage("https://media.discordapp.net/attachments/1162795987014787162/1198544044050092092/standard.gif?ex=65c8849f&is=65b60f9f&hm=7bda3e2b1b67d0d0aa48c5ae793d5168e22b6aa42556fe140d7b487ee8557a73&=&width=850&height=300")   
  interaction.reply({ embeds: [embed3], ephemeral: true })
        return
}

})
