const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const examplefile = require('./herethefile.js'); 

//const token = "yourTOKENid"

const PREFIX = "s!"
client.on("ready", function() { 
        client.user.setActivity("jimmy yeah") 
        client.user.setStatus('idle')
    console.log("Booted up! yoraay"); 
});

client.on("message", (message) => {
  if(message.content.startsWith(PREFIX + "hi")){
      message.reply("hi");
            message.channel.send("tell me a good joke");
  }
        if(message.content.includes(`jimmy test`)){
                message.channel.send("yeeah.");
        }
         if(message.content.startsWith(PREFIX + "commands")){
        message.channel.send("*here is list of commands: 1:nothing 2:nothing 3:nothing*");
  }
          if(message.content.startsWith(PREFIX + MFIX)){
        message.channel.send("*wow* w*o*rking");
  }
           if(message.content.startsWith(PREFIX + MFIX + rIX)){
        message.channel.send("o.o");
  }
        if(message.content.startsWith(PREFIX + MFIX + RIX)){
        message.channel.send("^_^");
  }
  
        //   if(message.content.startsWith(`give ${member} a beer`)){
//let member = message.mentions.members.first()
//message.channel.send(` ${member} got a beer !`);
//}
         
       
});


client.login(process.env.token);
