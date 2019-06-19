const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const herethefile = require('./herethefile.js'); 


const PREFIX = "s!"

client.on("message", (message) => {
  if(message.content.startsWith(PREFIX + " go watch")){
                client.user.setActivity("the world", {type: "WATCHING"})
        }
        
        });
        
client.login(process.env.token);
