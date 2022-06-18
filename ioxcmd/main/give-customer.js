module.exports = ({
    name: 'give-customer',
    code: `
$title[1;Role Customer]
$description[1;<@$authorID> Telah memberikan customer role kepada <@$mentioned[1;yes]>]
$color[1;$getGlobalUserVar[color]]
$giveRoles[$guildID;$mentioned[1];$getServerVar[customerrole]]
$argsCheck[1;Kamu harus mention member yg ingin kamu berikan customer role]
$onlyBotPerms[manageroles;Bot tidak memiliki izin __**Manage Roles**__, silahkan coba lagi]
$onlyPerms[managenicknames;Kamu tidak memiliki izin __**Manage Nickname**__, silahkan coba lagi]
$onlyForChannels[$getServerVar[givecustomerch];Perintah ini hanya dapat berjalan di channel <#$getServerVar[givecustomerch]>]
`
})