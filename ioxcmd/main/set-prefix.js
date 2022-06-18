module.exports = ({
    name: 'set-prefix',
    code: `
$title[1;Mengubah Prefix Bot]
$description[1;<@$authorID> Telah merubah bot prefix ke \`$message[1]\`]
$footer[1;Administrator Only!]
$setServerVar[prefix;$message[1]]
$color[1;$getGlobalUserVar[color]]
$argsCheck[1;Silahkan masukkan prefix baru untuk bot ini, coba lagi nanti]
$onlyPerms[admin;Kamu tidak memiliki izin __**Administrator**__, silahkan coba lagi!]
`
})