window.onload = function(){
    const socket = io("http://localhost:33759");

    socket.on("connected", () => {
        console.log("Front connected");
    });

    console.log(socket);
}