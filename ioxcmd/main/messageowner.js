module.exports = ({
    name: 'messageowner',
    code: `
$dm[$botOwnerID]
$title[1;Pesan Direct Messages]
$description[1;
**Pengirim :** $userTag[$mentioned[1;yes]]
**Penerima :** <@$botOwnerID>
**UserID Pengirim :** $mentioned[1;yes]]
$color[1;$getGlobalUserVar[color]]

$title[2;Isi Pesan]
$thumbnail[2;$userAvatar[$mentioned[1;yes]]]
$description[2;$noMentionMessage]
$color[2;$getGlobalUserVar[color]]
$addTimestamp[2]

$argsCheck[>5;Kamu harus mengirim minimal 5 kalimat untuk owner bot, coba lagi nanti!]
$globalCooldown[5h;Jangan terburu-buru, cooldown saat ini \`%time%\`]
`
})