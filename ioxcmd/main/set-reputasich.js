module.exports = ({
    name: 'set-reputasich',
    code: `
$title[1;Mengubah Channel Reputasi]
$description[1;
<@$authorID> Telah mengubah channel reputasi ke <#$mentionedChannels[1;yes]>]
$color[1;$getGlobalUserVar[color]]
$footer[1;Jika kamu mendapatkan invalid-channels silahkan masukkan ulang channel ID nya, mungkin kamu memasukkan ID lain?]
$setServerVar[reputasich;$mentionedChannels[1;yes]]
$onlyPerms[admin;Kamu tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
$onlyBotPerms[admin;Bot tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
`
})