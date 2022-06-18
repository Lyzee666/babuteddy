const os = require('os');

module.exports = ({
    name: 'ping',
    code: `
$title[1;Ping ...]
$description[1;
$getVar[emoji1] **RAM :** $ram
$getVar[emoji1] **Ping :** $pingms
$getVar[emoji1] **CPU Usage :** $cpu%
$getVar[emoji1] **Uptime :** $uptime

$getVar[emoji1] **CPU MODEL**
\`\`\`diff\n${os.cpus()[0].model}
\`\`\`
$getVar[emoji1] **CPU SPEED RATE**
\`\`\`diff\n${os.cpus()[0].speed} MHz
\`\`\`
$getVar[emoji1] **SYSTEM PLATFORM**
\`\`\`diff\n${os.platform()} (${os.release()})
\`\`\`
$getVar[emoji1] **CPU BASED**
\`\`\`diff\n${os.arch()}
\`\`\`]
$color[1;$getGlobalUserVar[color]]
`
})