import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("your bot is online");
});

client.on("messageCreate", (message) => {
  if (message.content === "mb!help") {
    message.reply({
      content: "the bot developing is in progress",
    });
  }
});

client.login(process.env.TOKEN);
