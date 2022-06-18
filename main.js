//  ioxcmd/main/

const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
token: "",
prefix: "$getServerVar[prefix]",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Events
bot.onMessage()

// Command Handler
const data = new aoijs.LoadCommands(bot)
data.load(bot.cmd,'./ioxcmd/main/')

// BOT Status
bot.status({
  text: "$getVar[status_text]",
  type: "WATCHING",
  status: "dnd",
  time: 12
})

// Bot Variables
bot.variables({
    status_text: "Hentai",
    servergeneralch: "977933037637599282",
    prefix: ".",
    color: "#ffa200",
    reputasi: "0",
    broadcastch: "Tidak/Belum di setup",
    checkreputasich: "Tidak/Belum di setup",
    reputasich: "Tidak/Belum di setup",
    customerrole: "Tidak/Belum di setup",
    sellerrole: "Tidak/Belum di setup",
    testimonich: "Tidak/Belum di setup",
    givecustomerch: "Tidak/Belum di setup",
    operatorminer: "Tidak/Belum di setup",
    lucky_clover: "0",
    emoji1: "<:arrowright:976107432038256660>",
    premium: "false"
})


//Ready Event
bot.readyCommand({
    channel: "$getVar[servergeneralch]",
    code: `
$djsEval[console.clear();]
$title[1;Bot Notification]
$description[1;Bot telah aktif, ini merupakan notifikasi dari server]
$addTimestamp[1]
$color[1;$getGlobalUserVar[color]]
`
})

// Untuk Button
bot.onInteractionCreate();
