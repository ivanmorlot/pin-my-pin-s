const { Server } = require("socket.io");

const socketServer = new Server({
    cors: {
        origin: "*",
    }
});

module.exports = socketServer;
