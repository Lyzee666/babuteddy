module.exports = ({
    name: 'help',
    nonPrefixed: true,
    aliases: ['menu','ioxy'],
    code: `

$title[1;Normal Command]
$description[1;
$getVar[emoji1] rep <mention>
$getVar[emoji1] check-rep (Opsional mention)
$getVar[emoji1] testimoni (Command lagi mati)
$getVar[emoji1] ping (Bot Stats)
$getVar[emoji1] broadcast <message> (Minimal 3 Kalimat)
$getVar[emoji1] give-customer <mention> (Memberikan Customer Role)
$getVar[emoji1] support (Gk tau ini apa)
$getVar[emoji1] avatar (Opsional mention)
$getVar[emoji1] profile (Opsional mentionn)
$getVar[emoji1] messageowner (Kirim minimal 5 Kalimat)]
$color[1;$getGlobalUserVar[color]]
$addTimestamp[1]

$title[2;Administrator Command]
$description[2;
$getVar[emoji1] set-broadcastch <mention_channel>
$getVar[emoji1] set-reputasich <mention_channel>
$getVar[emoji1] set-checkreputasi <mention_channel>
$getVar[emoji1] set-customerrole <mention_role>
$getVar[emoji1] set-sellerrole <mention_role>
$getVar[emoji1] set-testimonich <mention_channel>
$getVar[emoji1] set-givecustomerch <mention_channel>
$getVar[emoji1] set-prefix <prefix_baru_nya> (Ini gk wajib di ganti ya)
$getVar[emoji1] set-color <hex_color_code> (Mengubah warna sidebar embed)]
$color[2;$getGlobalUserVar[color]]
$addTimestamp[2]
`
})