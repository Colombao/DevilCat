const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const PREFIX = "";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "devilcat") {
      message.reply("Olá Colombo lindo");
    } else if (command === "boatarde") {
      message.reply("Boa tarde!");
    } else if (command === "boanoite") {
      message.reply("Boa noite!");
    }
  }
});

client.login(
  "MTE2NDI0MTgyNjI5MTY0NjU2NA.GcfBwB.S5ziE3MxiC2Q0o_M06vMLjvPXPLeYk7zzzNtUA"
);
