module.exports = ({
    name: 'set-testimonich',
    code: `
$title[1;Mengubah Channel Testimoni]
$description[1;<@$authorID> Telah merubah channel testimoni ke <#$mentionedChannels[1;yes]>]
$color[1;$getGlobalUserVar[color]]
$setServerVar[testimonich;$mentionedChannels[1;yes]]
$onlyPerms[admin;Kamu tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
$onlyBotPerms[admin;Bot tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
`
})