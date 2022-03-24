const { createServer } = require("http");
const app = require("./app");
const socketServer = require("./socket");

const server = createServer(app);

socketServer.attach(server);

const listen = server.listen(() => {
    console.log("Server started !");

    const address = listen.address().address;
    const port = listen.address().port;
    
    console.log(`${address}:${port}`);
});