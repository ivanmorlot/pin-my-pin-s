const { Server } = require("socket.io");

const socketServer = new Server({cors: {origin: "*"}});

socketServer.on("connection", socket => {
    socket.emit("connected");
});

module.exports = socketServer;