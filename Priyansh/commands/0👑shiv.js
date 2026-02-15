const fs = require("fs");
module.exports.config = {
  name: "shiv",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "virat", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("shiv") ||
     react.includes("mahakal") ||
react.includes("Mahakal")) {
    var msg = {
        body: `
⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱  

||••♦• 𝐉𝐚𝐢 𝐌𝐚𝐡𝐚𝐤𝐚𝐥  •♦••||

  ⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱`,attachment: fs.createReadStream(__dirname + `/noprefix/shiv.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
