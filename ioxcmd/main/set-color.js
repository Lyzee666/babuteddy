module.exports = ({
    name: 'set-color',
    code: `
$title[1;Mengubah Warna SideBar]
$description[1;
<@$authorID> Kamu telah mengubah warna sidebar ke $message[1]]
$color[1;$getGlobalUserVar[color]]
$setGlobalUserVar[color;$message[1];$authorID]
$argsCheck[1;Kamu harus memasukkan hex color code nya, silahkan cari di google color picker, terus salin code hex nya]
`
})