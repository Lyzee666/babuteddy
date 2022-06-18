module.exports = ({
    name: 'check-rep',
    code: `
$title[1;Check Reputasi]
$description[1;
<@$mentioned[1;yes]> Memiliki \`$getUserVar[reputasi;$mentioned[1;yes]]\` reputasi]
$color[1;$getGlobalUserVar[color]]
$onlyForChannels[$getServerVar[checkreputasich];Perintah ini hanya dapat berjalan di channel <#$getServerVar[checkreputasich]>]
`
})