module.exports = ({
    name: 'clear',
    aliases: ['purge'],
    code: `


$clear[1+$message[1]]

$wait[3s]
$title[1;Clear Message]
$description[1;<@$authorID> Telah membersihkan \`$message[1]\` pesan]
$addTimestamp[1]
$color[1;$getGlobalUserVar[color]]
$deleteIn[5s]
`
})