module.exports = ({
    name: 'set-givecustomerch',
    code: `
$title[1;Mengubah Channel Give Customer]
$description[1;<@$authorID> Telah merubah channel give customer ke <#$mentionedChannels[1;yes]>]
$color[1;$getGlobalUserVar[color]]
$footer[1;Jika kamu mendapatkan invalid-channels silahkan masukkan ulang channel ID nya, mungkin kamu memasukkan ID lain?]
$setServerVar[givecustomerch;$mentionedChannels[1;yes]]
$onlyPerms[admin;Kamu tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
$onlyBotPerms[admin;Bot tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
`
})