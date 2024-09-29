module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100057023542178") {
    var aid = ["100057023542178"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["ARNOB IS BUSY NOW ⚠️.", "ARNOB IS BUSY NOW ⚠️ ", "mention diyo na, porte bosche ♨️", " Busy with her 😌"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
