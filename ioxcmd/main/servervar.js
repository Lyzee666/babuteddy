module.exports = ({
    name: 'servervar',
    code: `

$title[1;Server Variable]
$description[1;
**Nama Server :** $serverName
**Owner Server :** <@$ownerID>]
$color[1;$getGlobalUserVar[color]]

$description[2;
$getVar[emoji1] **Broadcast Channel :** $getServerVar[broadcastch]
$getVar[emoji1] **Reputasi Channel :** $getServerVar[reputasich]
$getVar[emoji1] **Check Reputasi Channel :** $getServerVar[checkreputasich]
$getVar[emoji1] **Testimoni Channel :** $getServerVar[testimonich]
$getVar[emoji1] **Give Customer Channel :** $getServerVar[givecustomerch]
$getVar[emoji1] **Customer Role ID :** $getServerVar[customerrole]
$getVar[emoji1] **Seller Role ID :** $getServerVar[customerrole]]
$color[2;$getGlobalUserVar[color]]
$addTimestamp[2]
`
})