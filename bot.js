const { Client } = require("discord.js");
require("dotenv").config();
const client = new Client();
const prefix = "commbot ";
const commands = {};
const fs = require("fs");
const dir = "./commands";
const files = fs.readdirSync(dir);
for (let file of files) {
    commands[file.substring(0, file.length - 3)] = require(`./commands/${file.substring(0, file.length - 3)}`);
}

client.once("ready", () => {
    console.log(`${client.user.tag} logged in!`);
})

client.on("message", msg => {
    const txt = msg.content;
    if (txt.startsWith(prefix)) {
        const command = txt.split(' ')[1];
        const args = txt.split(' ');
        args.shift();
        args.shift();
        if (Object.keys(commands).includes(command)) {
            try {
                msg.reply(commands[command](args));
            } catch {
                msg.channel.send("error please report!");
            }
        } else {
            msg.reply("I don't know how to do that!(suggest command: https://discord.gg/u2EAacGDnF)");
        }
    }
});
client.login(process.env.BOT_TOKEN);