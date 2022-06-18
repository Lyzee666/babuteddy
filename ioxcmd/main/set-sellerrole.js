module.exports = ({
    name: 'set-sellerrole',
    code: `
$title[1;Mengubah Seller Role]
$description[1;
<@$authorID> Telah merubah seller role (<@&$mentionedRoles[1]>)]
$footer[1;Jika kamu mengalami kesahalan, silahkan lakukan ulang perintah ini, dan masukkan Roles ID yang valid!]
$color[1;$getGlobalUserVar[color]]
$setServerVar[sellerrole;$mentionedRoles[1]]
$onlyPerms[admin;Kamu tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
$onlyBotPerms[admin;Bot tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
`
})