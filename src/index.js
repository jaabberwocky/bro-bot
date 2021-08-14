require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const utils = require("./utils.js");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

let coolCount = {};

bot.onText(/\/count/, (msg) => {
  const chatId = msg.chat.id;
  const reply = `Cool count: [${coolCount[chatId]}]`;
  bot.sendMessage(chatId, reply);
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const reply = "Just talk to me and I'll respond to how cool you are!\n\n/count - show count of how cool you are\n/help - show help message"
  bot.sendMessage(chatId, reply);
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const reply = "Try saying 'hey dude'!"
  bot.sendMessage(chatId, reply);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const msgText = msg.text;

  utils.checkExistingCount(chatId, coolCount);

  if (msgText.startsWith("/")) {
    return;
  } else if (utils.isCool(msgText)) {
    const reply = utils.getRandomReply();
    coolCount[chatId] += 1;
    bot.sendMessage(chatId, reply);
    console.log(coolCount);
  } else {
    bot.sendMessage(
      chatId,
      `Not cool! There was no bro, dude or mate in that.`
    );
  }
});