const { createServer } = require("http");
const app = require("./app");
const { socketServer } = require("./websockets");

const server = createServer(app);

socketServer.attach(server);

const listen = server.listen(() => {
    const address = listen.address().address;
    const port = listen.address().port;
    console.log('----------------------------------------------------------')
    console.log("Server started at route:");
    console.log(`http://${address === '::' ? 'localhost' : address}:${port}`);
    console.log('----------------------------------------------------------')
});