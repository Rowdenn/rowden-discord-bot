module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.cache.get('822491300569808966').send("Je suis en ligne");
    client.user.setActivity("JVLIVS II", {
        type: "LISTENING"
    });
}