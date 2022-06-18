module.exports = [{
    name: 'mining',
    code: `
$title[1;Mining Lucky Clover]
$description[1;Click tombol mine dibawah untuk mencari lucky clover]
$addTimestamp[1]
$color[1;$getGlobalUserVar[color]]


$addButton[1;Mine;primary;miningbtn;no;⛏️]
`
},{
    type: 'interaction',
    prototype: 'button',
    name: 'miningbtn',
    code: `
$interactionReply[;{newEmbed:{title: Lucky Clover RiG}{description:<@$authorID> Kamu mendapatkan $random[10;100] Lucky Clover}{color: $getGlobalUserVar[color]}};;;;yes]
$setGlobalUserVar[lucky_clover;$sum[$getGlobalUserVar[lucky_clover;$authorID];$random[10;100]];$authorID]
`
}]