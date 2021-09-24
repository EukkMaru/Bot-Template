const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();

bot.login(config.token);
bot.on("ready", () => {
    console.log("Bot is Online");
    client.user.setPresence({ activities: [{ name: 'Code by EukkMaru' }], status: 'idle' });
});

bot.on("message", (message) => {
    function say(content){
        if(!content || typeof(content) == undefined){
            return console.error("Cannot Send a blank Message");
        }
        return message.channel.send(content.toString());
    }
    
});