const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Get Help Menu",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {

      
        const lawde = new MessageActionRow()
	.addComponents(
       new MessageButton()
 .setLabel("Invite")
 .setStyle("LINK")
  .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`), 
       new MessageButton()
   .setLabel("Support")
 .setStyle("LINK")
    .setURL("https://discord.gg/thunderrw"),
    new MessageButton()
  .setLabel("Vote")   
 .setStyle("LINK")  
   .setURL(`https://top.gg/bot/${client.user.id}/vote`), 
	        ) 



let helpmenu = new MessageEmbed()

   

        .setAuthor({name : `${client.user.username} Help Menu;`,iconURL : client.user.displayAvatarURL()})
  .setThumbnail("https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61")
  
.setDescription(`➡ Prefix for this server is: **${prefix}**\n➡ Total Commands: ${client.commands.size}\n➡ [Get ${client.user.username}](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot) | [Support](https://discord.gg/r4GnJYNMgE) | [Vote](https://top.gg/bot/${client.user.id}/vote)\n\n🛜 **__All Modules:__**\n\nℹ️ : Info\n🎧 : Music\n🎤 : Filters\n🛠️ : Utility\n⚙️ : Config\n📖 : All Commands`)



      //  .setFooter(ee.footertext, ee.footericon)
        .setFooter({text : `Thanks For Using This Bot!!` , iconURL : `https://media.discordapp.net/attachments/1162795987014787162/1200740969843269702/1199357089395527723.png?ex=65c7482b&is=65b4d32b&hm=8a8993a04cbbeece7bccbd18fab4fb5b89eb6bae69bd16b29b408bfdb080d0ed&=&format=webp&quality=lossless&width=160&height=61`}).setThumbnail(client.user.displayAvatarURL({dynamic : true}))
     .setColor("#ff0000")
     .setImage("")

     
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('help')
                .setPlaceholder('Select Module To Get Help For That Module')
                .addOptions([
                {
                    label: 'Info',
                    description: 'Show You Information Commands',
                    value: 'first',
                  emoji: 'ℹ️'
                },
                {
                    label: 'Music',
                    description: 'Show You Music Commands',
                    value: 'second',
                    emoji: '🎧'
                },
{
                    label: 'Filters',
                    description: 'Show You Music Filter Commands',
                    value: 'fourth',
       emoji: '🎤'                },   
                  {
                    label: 'Utility',
                    description: 'Show You Utility Commands',
                    value: 'sixth',
       emoji: '🛠️'                },         
                {
                    label: 'Config',
                    description: 'Show You Configuration Commands',
                    value: 'fifth',
                   emoji: '⚙️'                },
                {
                    label: 'All Commands',
                    description: 'Show You All Commands',
                    value: 'third',
       emoji: '📖'                }           
            ])
        )
        if (!args[0]) return message.reply({embeds: [helpmenu], components: [row,lawde]});
     //message.reply({ embeds: [helpmenu], components: [row] })
   }
}
