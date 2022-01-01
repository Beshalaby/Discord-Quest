
const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.once("ready", ()=>{
    console.log(`${client.user.tag} is working`);
})

client.on("messageCreate", (message)=>{
    if(message.content==="hello" && message.author.tag!="Discord Quest#5346") {
        message.reply("hello")
    }
})

//809

client.login(process.env.TOKEN);
