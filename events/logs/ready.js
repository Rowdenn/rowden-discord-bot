module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.cache.get('822488942988623873').send("Je suis en ligne");
    client.user.setActivity("JVLIVS II", {
        type: "LISTENING"
    });
}