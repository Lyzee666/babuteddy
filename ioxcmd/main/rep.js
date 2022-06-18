module.exports = ({
    name: 'rep',
    nonPrefixed: true,
    code: `
$title[1;Reputasi]
$description[1;Reputasi telah diberikan ke $username[$mentioned[1]]!]
$setUserVar[reputasi;$sum[$getUserVar[reputasi;$mentioned[1]];1];$mentioned[1]]
$color[1;$getGlobalUserVar[color]]
$argsCheck[1;Mention orang nya goblok]
$onlyForChannels[$getServerVar[reputasich];Perintah ini hanya dapat berjalan di channel <#$getServerVar[reputasich]>]
$onlyForRoles[$getServerVar[customerrole];Perintah ini hanya disediakan untuk Customer only!]
$onlyIf[$authorID!=$mentioned[1];Kamu tidak bisa menambahkan reputasi ke diri sendiri, kamu harus mention]
`
})