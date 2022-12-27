const discord = require ('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
    const channel = client.channels.cache.get("962325742933381130");
    if (!channel) return console.error("channel vojod nadarad");
    channel.join().then(connection => {
        console.log("ba movadaghiat connect shod.");
    })
    function AliveVoice() {
        const targetguild = client.guilds.cache.get("961733979399159859")
        const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        client.user.setActivity(`🔊 total mic | ${count}`, { type: "LISTENING" })
    }; setInterval(AliveVoice, 3000)
      })

client.login("");