module.exports = ({
    name: 'balance',
    aliases: ['bal'],
    code: `
$author[1;Lucky Clover;$userAvatar[$mentioned[1;yes]]]
$description[1;
**Pengguna :** <@$mentioned[1;yes]>
**Lucky Clover :** $getGlobalUserVar[lucky_clover;$mentioned[1;yes]]]
$color[1;$getGlobalUserVar[color]]
$addTimestamp[1]
`
})