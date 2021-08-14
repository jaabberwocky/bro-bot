const isCool = (msgText) => {
  const lowerCaseMsgText = msgText.toLowerCase();
  const coolTerms = ["dude", "bro", "mate"];
  for (let i = 0; i < coolTerms.length; i++) {
    if (lowerCaseMsgText.includes(coolTerms[i])) {
      return true;
    }
  }
  return false;
};

const getRandomReply = () => {
  const randomReplies = [
    "You are the man, dude!",
    "Absolutely a beast, bro!",
    "Slayin' it, mate!",
    "Right on, bruddah!",
  ];
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return randomReplies[getRandomInt(0, randomReplies.length)];
};

const checkExistingCount = (chatId, coolCount) => {
  if (coolCount[chatId] === undefined) {
    coolCount[chatId] = 0;
  }
};

exports.isCool = isCool;
exports.getRandomReply = getRandomReply;
exports.checkExistingCount = checkExistingCount;
