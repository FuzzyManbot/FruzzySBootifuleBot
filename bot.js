const Discord = require('discord.js');
const client = new Discord.Client();
bot.on("message"), function(message)(
  if (message.author.equals(bot.user)) return;

if (message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) (
  case "ping";
  message.channel.sendMessage("Pong!");
  break;
    case "info";
  message.channel.sendMessage("Information here.!");
  break;
  case "embed":
  var embed = new Discord.RichEmbed()
  .addField("Test Title", "Test desc", true)
  .addField("Test Title2e", "Tes2et desc", true)
  .addField("Test Title3", "Tes3et desc", true)
  message.channel.sendEmbed(embed);
  break;
  default:
  message.channel.sendMessage("Invalid Exectuion Command");
}
}}:
  
client.login(process.env.BOT.TOKEN);
