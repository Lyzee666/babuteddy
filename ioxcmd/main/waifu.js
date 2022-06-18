module.exports = ({
    name: 'waifu',
    code: `
$title[1;Random Waifu Image]
$image[1;$jsonRequest[https://api.waifu.pics/sfw/waifu;url]]
$footer[1;$username[$authorID] Jangan s*nge sama 2D, jangan ketagihan juga main command ini;$userAvatar[$authorID]]
$color[1;$getGlobalUserVar[color]]
`
})