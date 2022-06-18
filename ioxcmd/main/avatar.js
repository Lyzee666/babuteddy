module.exports = ({
  name: 'avatar',
  code: `
$title[1;User Avatar/Photo Profile]
$description[1;
**Avatar dari :** <@$mentioned[1;yes]>
**Request dari :** <@$authorID>]
$color[1;$getGlobalUserVar[color]]
$image[1;$userAvatar[$mentioned[1;yes]]]
$addTimestamp[1]
`
})