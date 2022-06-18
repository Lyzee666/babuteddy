module.exports = ({
    name: 'testimoni',
    aliases: ['testi'],
    nonPrefixed: false,
    code: `
$title[1;Testimoni ($userTag[$authorID])]
$description[1;
**Testimoni Ke :** $splitText[1]
**Produk :** $splitText[2]
**Penjual :** $splitText[3]
**Pembeli :** $splitText[4]
**Gambar/Attachment :** [Click Disini]($splitText[5])]
$image[1;$splitText[5]]
$argsCheck[>4;Kamu melupakan sesuatu, silahkan coba lagi]
$color[1;$getGlobalUserVar[color]]
$textsplit[$message;|]
$onlyForChannels[$getServerVar[testimonich];Perintah ini hanya dapat berjalan di <#$getServerVar[testimonich]>]
$onlyForRoles[$getServerVar[sellerrole];Perintah ini hanya disediakan untuk Seller only!]
`
})