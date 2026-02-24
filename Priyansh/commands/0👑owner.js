 const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "YASH THAKUR", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("virat") || 
react.includes("prefix")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦🌸===『*★🌸✦\n\n ✦𝐅𝐞𝐜𝐞𝐛𝐨𝐨𝐤 𝐥𝐢𝐧𝐤\n 𝐌𝐞𝐫𝐞 YASH BOSS 𝐤𝐚 𝐋𝐢𝐧𝐤😁😋 \n\n https://www.facebook.com/profile.php?id=61587312556844",
				attachment: fs.createReadStream(__dirname + `/https://www.facebook.com/profile.php?id=61587312556844`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
