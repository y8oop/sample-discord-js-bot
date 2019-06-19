const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const examplefile = require('./herethefile.js'); 

const token = "yourTOKENid"

const PREFIX = "s!"

client.on("ready", function() { 
        client.user.setActivity("being alive") 
    console.log("Booted up!"); 
});

client.on("message", (message) => {
  if(message.content.startsWith(PREFIX + "test")){
        message.channel.send("test is working");
          message.reply("30");
  }
         if(message.content.startsWith("second test")){
        message.channel.send("*Wololo* second test ")
        message.author.sendMessage("this is also working");
  } 
    
});



client.login(token);
