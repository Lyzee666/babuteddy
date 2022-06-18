module.exports = ({
    name: 'broadcast',
    code: `
@everyone
$title[1;Broadcast From $username]
$description[1;$noMentionMessage]
$color[1;$getGlobalUserVar[color]]
$argsCheck[>2;Kamu harus menambahkan minimal 2 kalimat untuk broadcast ! jangan biarkan isi nya blank]
$onlyPerms[mentioneveryone;Kamu tidak memiliki izin __**Mention Everyone**__ di server ini]
$onlyBotPerms[mentioneveryone;Bot tidak memiliki izin __**Mention Everyone**__ di server ini]
$onlyForChannels[$getServerVar[broadcastch];Broadcast hanya dapat dilakukan di channel <#$getServerVar[broadcastch]>]
`
})