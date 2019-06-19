const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const examplefile = require('./herethefile.js'); 

client.on("message", (message) => {
  if(message.content.startsWith(PREFIX + " go stream")){
                client.user.setActivity("my adventure as streamer", {type: "STREAMING"})
        }
        
        });
        
        
client.login(process.env.token);
