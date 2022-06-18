module.exports = ({
    name: 'profile',
    code: `
$title[1;Profil dari $userTag[$mentioned[1;yes]]]
$description[1;


$addField[1;User Avatar;[Click Disini]($userAvatar[$mentioned[1;yes]]);yes]
$addField[1;Is Bot;$isBot[$mentioned[1;yes]];yes]
$addField[1;Account Created;$creationDate[$mentioned[1;yes]];yes]
$addField[1;Discriminator;$discriminator[$mentioned[1;yes]];yes]
$addField[1;UserID;$mentioned[1;yes];yes]
$addField[1;Username;$username[$mentioned[1;yes]];yes]

]
$image[1;$userAvatar[$mentioned[1;yes]]]
$color[1;$getGlobalUserVar[color]]
`
})

